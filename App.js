import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Button from './components/Button'

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
		valorreal: 0,
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

  calcularIOF = n => {
	let valor = this.state.valorreal
	let valor1 = 0
	let valor2 = 0
	let DataTable = []
	if(valor > 0) {
		valor1 = valor * 0.0638
		valor2 = valor * 0.0110
		
		DataTable = [
			['Cartão de Débito','6,38%','R$ '+valor1.toFixed(2)],
			['Cartão de Crédito','6,38%','R$ '+valor1.toFixed(2)],
			['Saque Exterior Débito','6,38%','R$ '+valor1.toFixed(2)],
			['Comprar Moeda no Brasil','1,10%','R$ '+valor2.toFixed(2)],
			['Comprar Moeda no Exterior','0%','R$ 0.00']
		]

		this.setState({DataTable})
	}
  }

  render(){
    const state = this.state;
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.titleText}>Calcular o imposto dos seus gastos no exterior (em R$)</Text>
			</View>
			<View>
				<TextInput keyboardType={'numeric'} style={styles.input} 
					onChangeText={(valorreal) => this.setState({valorreal})}
    				value={this.state.valorreal}/>
			</View>
			<View>
				<Button label='Calcular' onClick={this.calcularIOF} />
			</View>
			<Table borderStyle={{borderWidth: 1, borderColor: '#305252', flexDirection:'row'}}>
				<Row data={state.HeadTable} style={styles.HeadStyle} widthArr={state.WidthAttr} textStyle={styles.TableTextHead}/>
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
	  backgroundColor: '#ffffff',
	  justifyContent: 'center',
	},
	HeadStyle: { 
	  height: 50,
	  alignContent: "center",
	  backgroundColor: '#488286'
	},
	TableText: { 
	  margin: 10,
	},
	TableTextHead: { 
		margin: 10,
		color: '#ffffff',
		textAlign: "center"
	  },
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center"
	},
	input: {
		marginRight: 5,
		marginBottom: 15,
		marginTop: 15,
		height: 35,
		padding: 5,
		borderColor: '#305252',
		borderWidth: 1
	 }
  });
