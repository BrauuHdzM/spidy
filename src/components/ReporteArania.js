import {  Document, Page,Text,Image,StyleSheet,Font,View   } from '@react-pdf/renderer';
import React from "react";
import portada3 from '../images/portada3.jpg';
import TarantulaPic from '../images/rP/r2Tar.jpg';




const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export const ReporteSpider = ({img,registrostotales,califa,imggraph,ranking}) => (
    <Document>
      <Page>
      <Image src={portada3} />
      <Image src={img} />
      <View style={styles.body}>
      <Text style={styles.title}>Fecha: {date}</Text>
      <Text style={styles.title}> Total de registros en sistema : {registrostotales}</Text>
      <Text style={styles.title}> Calificación : {califa}</Text>
      </View>
      
      <View style={styles.body2}>
      <Image src={imggraph} styles={styles.image} />
      </View>
      <Text>{ranking}</Text>
      <Text style={styles.pageNumber}>Copyright © 2023 All Rights Reserved by Spidy</Text> 
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