import {  Document, Page,Text,Image,StyleSheet,Font,View   } from '@react-pdf/renderer';
import React from "react";
import portada3 from '../images/portada3.jpg';
import TarantulaPic from '../images/rP/r2Tar.jpg';




const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export const ReporteSpider = ({img,registrostotales,califa,imggraph,ranking,nombreSp}) => (
    <Document>
      <Page>
      <Image src={portada3} />
      <Image src={img} />
      
      
      <View style={styles.body}>
      <View style={styles.table}> 
        <View style={styles.tableRow1}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Fecha</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Registros en sistema</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Calificación </Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{date}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{registrostotales}</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{califa}</Text> 
          </View> 
        </View>
        </View>
        </View>
      <Text style={styles.title}>COMPARATIVA RESPECTO A OTRAS ARAÑAS : </Text>
      <View style={styles.body2}>
      <Image src={imggraph} styles={styles.image} />
      </View>
      <View style={styles.table}> 
        <View style={styles.tableRow1}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Ranking</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Especie</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Calificación </Text> 
          </View> 
        </View>
      <React.Fragment>
      {ranking.map((remark, i) => (
        

        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 

        <Text style={styles.tableCell} key={i}>  {i+1} </Text>
        </View>
        <View style={styles.tableCol}> 
        <Text style={styles.tableCell} key={i+2}>{remark.species}</Text>
        </View>
        <View style={styles.tableCol}> 
        <Text style={styles.tableCell} key={i+3}>{remark.PromedioEncuestas}</Text>
       </View>
       </View>
       
       ))}

    </React.Fragment>
    </View>
     
      <Text style={styles.pageNumber}>Copyright © 2023 All Rights Reserved by Spidy</Text> 
      </Page>

    </Document>
  );


  /*
      {Object.keys(ranking).map((key, i) => (
        <p key={i}>
          <span>Key Name: {key}</span>
          <span>Value: {ranking[key]}</span>
        </p>
      ))}*/
 /* Font.register({ family: 'Staatliches-Regular', format: "truetype", src:font });*/
 
 Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
  const styles = StyleSheet.create({
  
    body: {
      paddingTop: 10,
      paddingHorizontal: 35,
      paddingBottom: 10,
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
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    textran: {
      fontSize: 12,
      textAlign: 'left',
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
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 0, 
      borderRightWidth: 0, 
      borderBottomWidth: 0 
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableRow1: { 
      margin: "auto", 
      flexDirection: "row" ,
      backgroundColor: "lightgrey"
    }, 
    tableCol: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    }, 
    tableCell: { 
      margin: "auto", 
      marginTop: 5, 
      fontSize: 9 ,
    
    }
  });