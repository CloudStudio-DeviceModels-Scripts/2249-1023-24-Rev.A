function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Volumenes consumidos
  var n01 = endpoints.addEndpoint("1", "Volumen total agua potable", endpointType.genericSensor);
  n01.variableTypeId = 1326;
  var n02 = endpoints.addEndpoint("2", "Volumen total agua pozo", endpointType.genericSensor);
  n02.variableTypeId = 1326;
  var n03 = endpoints.addEndpoint("3", "Volumen total agua polígono", endpointType.genericSensor);
  n03.variableTypeId = 1326;
  var n04 = endpoints.addEndpoint("4", "Volumen día agua potable", endpointType.genericSensor);
  n04.variableTypeId = 1326;
  var n05 = endpoints.addEndpoint("5", "Volumen día agua pozo", endpointType.genericSensor);
  n05.variableTypeId = 1326;
  var n06 = endpoints.addEndpoint("6", "Volumen día agua polígono", endpointType.genericSensor);
  n06.variableTypeId = 1326;
  
  //Datos Nitratos
  var n1 = endpoints.addEndpoint("7", "Nitratos - Concentración teórica", endpointType.genericSensor);
  n1.variableTypeId = 1318;
  var n2 = endpoints.addEndpoint("8", "Nitratos - Consigna", endpointType.genericSensor);
  n2.variableTypeId = 1318;
  var n3 = endpoints.addEndpoint("9", "Nitratos - Analítica potable", endpointType.genericSensor);
  n3.variableTypeId = 1318;
  var n4 = endpoints.addEndpoint("10", "Nitratos - Fecha últm. análisis potable", endpointType.genericSensor);
  n4.variableTypeId = 1314;
  var n5 = endpoints.addEndpoint("11", "Nitratos - Analítica pozo", endpointType.genericSensor);
  n5.variableTypeId = 1318;
  var n6 = endpoints.addEndpoint("12", "Nitratos - Fecha últm. análisis pozo", endpointType.genericSensor);
  n6.variableTypeId = 1314;

  //Datos válvula mezcladora
  var n7 = endpoints.addEndpoint("13", "Válula mezcla - Porcentaje apertura", endpointType.genericSensor); 
  n7.variableTypeId = 1319;
  var n8 = endpoints.addEndpoint("14", "Válula mezcla - Coef. Kp", endpointType.genericSensor); 
  n8.variableTypeId = 1307;
  var n9 = endpoints.addEndpoint("15", "Válula mezcla - Coef. Ti", endpointType.genericSensor); 
  n9.variableTypeId = 1307; 
  var n10 = endpoints.addEndpoint("16", "Válula mezcla - Func. forzado", endpointType.genericSensor); 
  n10.variableTypeId = 1320; 

  //Datos Altura depósito
  var n11 = endpoints.addEndpoint("17", "Altura depósito", endpointType.genericSensor); 
  n11.variableTypeId = 1321;

  //Datos Cloro
  var n12 = endpoints.addEndpoint("18", "Cloro - Concentración medida", endpointType.genericSensor); 
  n12.variableTypeId = 1318;
  var n13 = endpoints.addEndpoint("19", "Cloro - Error equipo", endpointType.genericSensor); 
  n13.variableTypeId = 1322;
 
  //Datos Presiones
  var n14 = endpoints.addEndpoint("20", "Presión - Bomba Potable nº1", endpointType.genericSensor); 
  n14.variableTypeId = 1323;
  var n15 = endpoints.addEndpoint("21", "Presión - Bomba Potable nº2", endpointType.genericSensor); 
  n15.variableTypeId = 1323;
  var n16 =  endpoints.addEndpoint("22", "Presión - Bomba Pozo nº1", endpointType.genericSensor); 
  n16.variableTypeId = 1323;
  var n17 = endpoints.addEndpoint("23", "Presión - Bomba Pozo nº2", endpointType.genericSensor); 
  n17.variableTypeId = 1323;
 

  //Datos Variador nº 1
  var n18 = endpoints.addEndpoint("24", "Varidor nº1 - Frecuencia salida", endpointType.genericSensor);
  n18.variableTypeId = 1325;
  var n19 = endpoints.addEndpoint("25", "Varidor nº1 - Velocidad motor", endpointType.genericSensor); 
  n19.variableTypeId = 1324;
  endpoints.addEndpoint("26", "Varidor nº1 - Intensisdad motor", endpointType.currentSensor);
  var n21 = endpoints.addEndpoint("27", "Varidor nº1 - Par motor", endpointType.genericSensor); 
  n21.variableTypeId = 1319;
  var n22 = endpoints.addEndpoint("28", "Varidor nº1 - Potencia motor", endpointType.genericSensor); 
  n22.variableTypeId = 1319;
  endpoints.addEndpoint("29", "Varidor nº1 - Tensión motor", endpointType.voltageSensor);
  endpoints.addEndpoint("30", "Varidor nº1 - DC link tensión", endpointType.voltageSensor);
  
  //Datos Variador nº 2
  //No añadirlos aquí por si se borran los otros datos. Consultar con CLOUD STUDIO.
  
  //Datos Variador nº 3
  //No añadirlos aquí por si se borran los otros datos. Consultar con CLOUD STUDIO.

  //Datos Variador nº 4
  //No añadirlos aquí por si se borran los otros datos. Consultar con CLOUD STUDIO.

  //MP y Alarmas
   var n25 = endpoints.addEndpoint("31", "Térmico Bomba nº1 Potable", endpointType.genericSensor); 
   n25.variableTypeId = 1322;
   var n26 = endpoints.addEndpoint("32", "Térmico Bomba nº2 Potable", endpointType.genericSensor); 
   n26.variableTypeId = 1322;
   var n27 = endpoints.addEndpoint("33", "Térmico Bomba nº1 Pozo", endpointType.genericSensor); 
   n27.variableTypeId = 1322;
   var n28 = endpoints.addEndpoint("34", "Térmico Bomba nº2 Pozo", endpointType.genericSensor); 
   n28.variableTypeId = 1322;

   var n29 = endpoints.addEndpoint("35", "Estado variador B.Potable nº1", endpointType.genericSensor); 
   n29.variableTypeId = 1327;
   var n30 = endpoints.addEndpoint("36", "Estado variador B.Potable nº2", endpointType.genericSensor); 
   n30.variableTypeId = 1327;
   var n31 = endpoints.addEndpoint("37", "Estado variador B.Pozo nº1", endpointType.genericSensor); 
   n31.variableTypeId = 1327;
   var n32 = endpoints.addEndpoint("38", "Estado variador B.Pozo nº2", endpointType.genericSensor); 
   n32.variableTypeId = 1327;

   var n33 = endpoints.addEndpoint("39", "Estado B.Potable nº1", endpointType.genericSensor); 
   n33.variableTypeId = 1316;
   var n34 = endpoints.addEndpoint("40", "Estado B.Potable nº2", endpointType.genericSensor); 
   n34.variableTypeId = 1316;
   var n35 = endpoints.addEndpoint("41", "Estado B.Pozo nº1", endpointType.genericSensor); 
   n35.variableTypeId = 1316;
   var n36 = endpoints.addEndpoint("42", "Estado B.Pozo nº2", endpointType.genericSensor); 
   n36.variableTypeId = 1316;

}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}