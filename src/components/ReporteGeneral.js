import {  Document, Page,Text,Image,StyleSheet,Font,View   } from '@react-pdf/renderer';

import portada1 from '../images/portada1.jpg';
import React from "react";

const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export const ReporteG = ({imgbarras}) => (
    <Document>
      <Page>
      <Image src={portada1} />
      <View style={styles.body}>
      <Text style={styles.title}>CANTIDAD DE REGISTROS TOTALES AL  {date} </Text>
  
      <Image src={imgbarras} />
      <Text>zapato zaa</Text>
      </View>
      
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
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
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