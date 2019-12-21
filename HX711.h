#ifndef __HX711__H__
#define __HX711__H__

#include <Arduino.h>

#define HX711_SCK 10
#define HX711_DT 11

extern void Init_Hx711();
extern unsigned long HX711_Read(void);
extern long Get_Weight();
extern void Get_Maopi();

#endif
