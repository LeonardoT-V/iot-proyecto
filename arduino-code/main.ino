#include <Arduino.h>
#if defined(ESP32) || defined(PICO_RP2040)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#define WIFI_SSID "NETLIFE - TORVE"
#define WIFI_PASSWORD "SALY2023"

// Include Firebase library (this library)
#include <Firebase_ESP_Client.h>
#define API_KEY "AIzaSyBIquRkQWPyZLe3fM3uwRKfoXYmnVyIxx8"
#define USER_EMAIL "admin@gmail.com"
#define USER_PASSWORD "admin123"
#define DATABASE_URL "https://iot-proyecto-57bb3-default-rtdb.firebaseio.com"
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

FirebaseJson json;

# include "DHT.h"
# include "DHT_U.h"
#include "time.h"

// Provide the token generation process info.
#include "addons/TokenHelper.h"
// Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

# define DHTPIN 4
# define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
const int analo = A0;
String databasePath;
int timestamp;
const char* ntpServer = "pool.ntp.org";

// Timer variables (send new readings every three minutes)
unsigned long sendDataPrevMillis = 0;
// 3 minutos 000 /4
unsigned long timerDelay = 15000;

void setup() {
  Serial.begin(115200);
  initWiFi();
  dht.begin();
  configTime(0, 0, ntpServer);

config.api_key= API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
config.database_url = DATABASE_URL;
Firebase.reconnectWiFi(true);
 config.token_status_callback = tokenStatusCallback;
 config.max_token_generation_retry = 5;

 Firebase.begin(&config, &auth);
}

struct SensorData {
  float temp;
  float hum;
};

void loop() {

  if (Firebase.ready() && (millis() - sendDataPrevMillis > timerDelay || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();
    int valorHumedad = tierraSensor();

    SensorData sensoresDht = readDhtSensor();


    timestamp = getTime();
    //Serial.println(timestamp);
    databasePath = "/metrica/"+ String(timestamp);
    Serial.println(databasePath);
    json.add("temp", sensoresDht.temp);
    json.add("hum", sensoresDht.hum);
    json.add("earth", valorHumedad);

    if (Firebase.RTDB.setJSON(&fbdo, databasePath.c_str(), &json)){
      Serial.println("PASSED: Nuevo valor agregado: ");
      //Serial.print(json.toString(Serial, true));
      Serial.println("PATH: " + fbdo.dataPath());
      //Serial.println("TYPE: " + fbdo.dataType());
      Serial.print("Tierra: ");
      Serial.println(valorHumedad);
      Serial.print("Humedad: ");
      Serial.println(String(sensoresDht.hum, 1 ) );
      Serial.print("Temperatura: ");
      Serial.println(String(sensoresDht.temp, 1 ) );
      Serial.println("###############################################");
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }

  }
  //delay(2000);
}

void initWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println(WiFi.localIP());
  Serial.println();
}

struct SensorData readDhtSensor() {
  struct SensorData data;
  data.hum = dht.readHumidity();
  data.temp = dht.readTemperature();

  if (isnan(data.hum) || isnan(data.temp)) { data.hum=0; data.temp=0; }

  return data;
}

int tierraSensor () {
  int valorHumedad = analogRead(analo);
  valorHumedad = constrain(valorHumedad, 380, 1023);
  valorHumedad = map(valorHumedad, 380, 1023, 100, 0);
  return valorHumedad;
}

unsigned long getTime() {
  time_t now;
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    //Serial.println("Failed to obtain time");
    return(0);
  }
  time(&now);
  return now;
}
