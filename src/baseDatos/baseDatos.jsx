import honda from '../assets/productos/honda.jpg';
import mustang from '../assets/productos/mustang.jpg';
import c63 from '../assets/productos/c63.jpg';
import macan from '../assets/productos/macan.jpg';
import maserati from '../assets/productos/maserati.jpg'



export const arregloProductos = [
    {
        id : 1, 
        marca: "Honda", 
        modelo: "Civic",  
        año: "2022", 
        price: 700,
        img : honda, 
        categoria: "auto", 
        descripcion: "Vehículo de 4 puertas especial para la familia, con una potencia de 220CV y un aceleración de 0 a 100 en 6,3s"
    },
    {
        id : 2,
        marca: "Ford",
        modelo: "Mustang",
        año: "2017",
        price: 1300,
        img : mustang,
        categoria: "auto",
        descripcion: "Vehículo de 2 puertas deportivo para disfrutar de su potencia ya gresividad, su motor genera 420CV y un aceleración de 0 a 100 en 3,2s"
    },
    {
        id : 3,
        marca: "Mercedes Benz",
        modelo: "C63 AMG",
        año: "2013",
        price: 1000,
        img : c63,
        categoria: "auto",
        descripcion: "Vehículo de 4 puertas elegante y agresivo, con una potencia de 330CV y un aceleración de 0 a 100 en 3,6s"
    },
    {
        id : 4,
        marca: "Porsche",
        modelo: "Macan",
        año: "2012",
        price: 900,
        img : macan,
        categoria: "camioneta",
        descripcion: "Vehículo de 4 puertas especial para la familia, con una potencia de 320CV y un aceleración de 0 a 100 en 4,7s"
    },
    {
        id : 5,
        marca: "Masserati",
        modelo: "Levante",
        año: "2015",
        price: 800,
        img : maserati,
        categoria: "camioneta",
        descripcion: "Vehículo de 4 puertas especial para la comodidad y la elegancia, con una potencia de 304CV y un aceleración de 0 a 100 en 5s"
    },
]

