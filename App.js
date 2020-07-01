import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

/**import { TextInputMask } from 'react-native-masked-text';
<TextInputMask
					type={'money'}
					options={{
						precision: 2,
						separator: ',',
						delimiter: '.',
						unit: 'R$',
						suffixUnit: ''
					}}
					value={this.state.advanced}
					onChangeText={text => {
						this.setState({
						advanced: text
						})
					}}
					/>*/
					
export default class App extends Component {
  constructor(props){
	super(props);
	
	const widthDefault=Dimensions.get('window').width / 4;
	const widthG=Dimensions.get('window').width / 5 * 2;

    this.state = {
	  HeadTable: ['Operação','Alíquota','Valor IOF'],
	  WidthAttr: [widthG,widthDefault,widthDefault],
      DataTable: [
        ['Cartão de Débito','6,38%','0'],
        ['Cartão de Crédito','6,38%','0'],
        ['Saque Exterior Débito','6,38%','0'],
        ['Comprar Moeda no Brasil','1,10%','0'],
        ['Comprar Moeda no Exterior','0%','0']
      ]
    }
  }

  render(){
    const state = this.state;
	return (
		<View style={styles.container}>
			<View styles={styles.TextInfo}>
				<Text>Calcular o imposto dos seus gastos no exterior (em R$)</Text>
			</View>
			<View>
				
			</View>
			<Table borderStyle={{borderWidth: 1, borderColor: '#305252', flexDirection:'row'}}>
				<Row data={state.HeadTable} style={styles.HeadStyle} widthArr={state.WidthAttr} textStyle={styles.TableText}/>
				<Rows data={state.DataTable} widthArr={state.WidthAttr} textStyle={styles.TableText}/>
			</Table>
		</View>
	)
  }
}

const styles = StyleSheet.create({
	container: { 
	  flex: 1,
	  padding: 18,
	  paddingTop: 55,
	  backgroundColor: '#ffffff' 
	},
	HeadStyle: { 
	  height: 50,
	  alignContent: "center",
	  backgroundColor: '#488286'
	},
	TableText: { 
	  margin: 10
	},
	TextInfo: {
		fontSize: 20,
		
	},
	input: {
		marginRight: 5,
		marginBottom: 15,
		marginTop: 15,
		height: 40,
		borderColor: '#305252',
		borderWidth: 1
	 },
	 submitButton: {
		backgroundColor: '#7a42f4',
		padding: 10,
		margin: 15,
		height: 40,
	 },
	 submitButtonText:{
		color: 'white'
	 }
  });
