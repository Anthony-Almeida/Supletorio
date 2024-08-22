import { StyleSheet } from "react-native"
import { COLOR_PRYMARY } from "../common/constTheme."

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center'
  },
  contenedorInicio: {
    marginTop: '20%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  fondoInicio: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  textBien: {
    color: '#0f0f0f',
    fontSize: 40,
    fontWeight: '800',
  },
  resultado: {
    color: COLOR_PRYMARY,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  contenedorAcceder: {
    position: 'static',
    bottom: '10%',
    gap: 20
  },
  textb: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800'
  },
  boton: {
    backgroundColor: COLOR_PRYMARY,
    borderRadius: 25,
    paddingVertical: 20,
    width: 150,
  },
  etiqueta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  cajaPrincipal: {
    paddingVertical: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 30,
    marginVertical: 10
  },
  inputNum: {
    backgroundColor: '#f1f4f5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
  }
})