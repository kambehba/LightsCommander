const int WET_SENSOR = A0;
const int PUMP = D1;
int value = 0;

void setup() {
  Serial.begin(115200);
  pinMode(PUMP, OUTPUT);

   digitalWrite(PUMP, LOW);
}

void loop() {

   Serial.print("MOISTURE LEVEL : ");
   value= analogRead(WET_SENSOR);
   value= value/10;
   Serial.println(value);

   if(value > 80)
   {
       StartThePump();
   }
   delay(1000);

  
}

void StartThePump()
{
   digitalWrite(PUMP, HIGH);
    delay(10000);
     digitalWrite(PUMP, LOW);
}




 
