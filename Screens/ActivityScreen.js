import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import {LineChart } from "react-native-chart-kit";
import * as Animatable from 'react-native-animatable';

// Redux Imports
import { useSelector } from 'react-redux';

// Components
import Day from '../Components/Day';
import Helper from '../Components/Helper';

const ActivityScreen = props => {

    // Redux State
    const records = useSelector(state => state.record);
    const units = useSelector(state => state.unit);

    const state = {
        color : '#136DF3',
        activestate : 'rgba(255, 255, 255, 0.291821)'
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>

            <ScrollView contentContainerStyle={{ paddingBottom: 700 }}>
            
                <Text style={styles.subtitle}>Here is your Activity</Text>

                <View style={styles.dataSet}>
                    <Day dayname='Sun'/>
                    <Day dayname='Mon'/>
                    <Day dayname='Tue'/>
                    <Day dayname='Wed'/>
                    <Day dayname='Thu' active={state.activestate}/>
                    <Day dayname='Fri'/>
                    <Day dayname='Sat'/>
                </View>

                <LineChart
                    data={{
                        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 88, records.dayCount],
                            strokeWidth: 2,
                        },
                        ],
                    }}
                    width={Dimensions.get('window').width - 10}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    style={{
                        marginTop : 5,
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />

                <Animatable.View animation="fadeInLeft" duration={1500} style={[styles.rectangleone,{top : 300,backgroundColor:'#F4F9FC'}]}>
                        <Helper
                        image = {require('../assets/waterDot.png')}
                        title = "Today"
                        subtitle = "The amount of water you drank today"
                        />
                        <Text></Text>
                </Animatable.View>

                <Animatable.View animation="fadeInRight" duration={1500} style={[styles.rectangleone,{top : 400,backgroundColor:'#F4F9FC'}]}>
                    <View>
                        <Text style={styles.summaryText}>You have drank {records.dayCount} {units.unit} of water today.</Text>
                    </View>
                </Animatable.View>
                
                <Animatable.View animation="fadeInLeft" duration={1500} style={[styles.rectangleone,{top : 500,backgroundColor:'#F4F9FC'}]}>
                        <Helper
                        image = {require('../assets/waterGlass.png')}
                        title = "This Week"
                        subtitle = "The amount of water you drank in a week"
                        />
                        <Text></Text>
                </Animatable.View>

                <Animatable.View animation="fadeInRight" duration={1500} style={[styles.rectangleone,{top : 600,backgroundColor:'#F4F9FC'}]}>
                    <View style = {{top: 1}}>
                        <Text style={styles.summaryText}>This week, your water intake was {records.weekCount} {units.unit}</Text>
                    </View>
                </Animatable.View>

                <Animatable.View animation="fadeInLeft" duration={1500} style={[styles.rectangleone,{top : 700,backgroundColor:'#F4F9FC'}]}>
                        <Helper
                        image = {require('../assets/waterGallon.png')}
                        title = "This Month"
                        subtitle = "The amount of water you drank in a month"
                        />
                </Animatable.View>
                
                <Animatable.View animation="fadeInRight" duration={1500} style={[styles.rectangleone,{top : 800,backgroundColor:'#F4F9FC'}]}>
                    <View>
                        <Text style={styles.summaryText}>This month, your water intake was {records.monthCount} {units.unit}</Text>
                    </View>
                </Animatable.View>

            </ScrollView>

        </SafeAreaView>
    
    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#136Df3',
        flexDirection : 'column',

    },

    scrollView: {

      },

    summaryContainer: {
        paddingTop: 20,
        justifyContent:'center'
    },
    
    summaryText: {
        marginTop : 25,
        marginLeft : 15,
        fontSize: 18,
    },

    headerText: {
        fontSize: 24,
    },

    container: {
        flex : 1,
        backgroundColor : '#136Df3'
    },

    containerone : {
        flex : 2.5,
        display : 'flex'
    },

    subtitle : {
        fontSize : 20,
        color : '#fff',
        fontWeight : 'bold',
        letterSpacing : 0.5,
        marginTop : 10,
        textAlign: 'center',
        marginBottom : 15,
    },

    dataSet : {
        flex : 0.2,
        color : '#fff',
        flexDirection : 'row',
        marginLeft : 30,
        marginRight : 10,
    },

    containertwo : {
        flex : 1,
        backgroundColor : '#fff',
        borderTopRightRadius : 10,
        borderTopLeftRadius : 10,
        paddingTop : 10
    },

    rectangleone : {
        height : 85,
        width : 400,
        position : 'absolute',
        alignSelf  : 'center',
        top : 470,
        borderRadius : 18,
        marginTop : 10,
    },
});

export default ActivityScreen;