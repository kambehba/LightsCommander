
#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <FirebaseArduino.h>
#include <ESP8266HTTPClient.h>

#include <WiFiClientSecureBearSSL.h>

const uint8_t fingerprint[20] = {0x0e,0x81,0xaa,0x54,0x2c,0x1a,0xac,0xba,0x15,0xa8,0x92,0xad,0x62,0x32,0x59,0x1b,0xb2,0xe8,0x0d,0x9e};

ESP8266WiFiMulti WiFiMulti;

#define FIREBASE_HOST "dazzling-torch-8270.firebaseio.com"
#define FIREBASE_AUTH "II3bycCtijU0NplKxY7HoJ1e8YLtIY92PRYHdBRu"

const int OUTPUT_1 = D1;
const int OUTPUT_2 = D2;
const int OUTPUT_3 = D3;
const int OUTPUT_4 = D4;
int value = 0;

void setup() {
  Serial.begin(115200);
  pinMode(OUTPUT_1, OUTPUT);
  pinMode(OUTPUT_2, OUTPUT);
  pinMode(OUTPUT_3, OUTPUT);
  pinMode(OUTPUT_4, OUTPUT);

  digitalWrite(OUTPUT_1, LOW);
  digitalWrite(OUTPUT_2, LOW);
  digitalWrite(OUTPUT_3, LOW);
  digitalWrite(OUTPUT_4, LOW);

   for (uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP("Rustin", "k8084164");
  //WiFiMulti.addAP("iPhone", "k8084164");

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  
}

void loop() {

   if ((WiFiMulti.run() == WL_CONNECTED)) {

    std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);
    // Serial.printf("WIFI CONNECTED");
  }

  
   delay(1000);
Serial.printf("mmm");
   
    Serial.println(Firebase.getFloat("/LightsCommander/commandId"));
   if(Firebase.getFloat("/LightsCommander/commandId") == 1) { AllON();}
   if(Firebase.getFloat("/LightsCommander/commandId") == 2) { AllOFF();}
   
   if(Firebase.getFloat("/LightsCommander/commandId") == 3) { FLASHALL();}

  
}



void AllON()
{
  digitalWrite(OUTPUT_1, HIGH);
  digitalWrite(OUTPUT_2, HIGH);
  digitalWrite(OUTPUT_3, HIGH);
  digitalWrite(OUTPUT_4, HIGH);
}

void AllOFF()
{
  digitalWrite(OUTPUT_1, LOW);
  digitalWrite(OUTPUT_2, LOW);
  digitalWrite(OUTPUT_3, LOW);
  digitalWrite(OUTPUT_4, LOW);
}

void FLASHALL()
{
  for(int i=0;i<5;i++)
  {
    AllON();
    delay(300);
    AllOFF();
    delay(300);
  }
}




 
