import {  Document, Page,Text,Image,StyleSheet,Font,View   } from '@react-pdf/renderer';

import portada1 from '../images/portada1.jpg';
import React from "react";

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export const ReporteG = ({imgbarras,spidermost,imgpastel,porcentaje,registros}) => (
    <Document>
      <Page>
      <Image src={portada1} />
     <View style={styles.body}>
      <Text style={styles.title}>{registros} REGISTROS TOTALES AL  {date} </Text>
  
      <Image src={imgbarras} />
      <Text style={styles. textran}>La gráfica anterior muestra que actualmente existen más registros de la araña {spidermost}</Text>
      
    </View>
    <View style={styles.bodyb}>
      <Text style={styles.title}>SATISFACCIÓN DE LOS USUARIOS DE SPIDY {date} </Text>
      </View>
      <View style={styles.body2}>
      <Image src={imgpastel} styles={styles.image} />
      </View>
      <Text style={styles. textran}>La gráfica anterior muestra que el sistema cuenta con una aprobación del  {porcentaje}% </Text>
      
      

      <Text style={styles.pageNumber}>Copyright © 2023 All Rights Reserved by Spidyyy</Text> 
      </Page>



    </Document>
  );

 /* Font.register({ family: 'Staatliches-Regular', format: "truetype", src:font });*/
 
 Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
  const styles = StyleSheet.create({
  
    body: {
      paddingTop: 10,
      paddingHorizontal: 35,
    },
    body2: {
      paddingTop: 3,
      paddingHorizontal: 170,
    },
    bodyb: {
      paddingTop: 1,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    textran: {
      fontSize: 12,
      textAlign: 'center',
      fontFamily: 'Oswald',
      color: 'red',
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
      width: 12,
      height: 20
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });