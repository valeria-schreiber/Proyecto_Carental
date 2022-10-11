import { createContext, useState, useEffect } from "react"; 
import axios from "axios";

//Conexion a la API !!!!***NO TOCAR NADA***!!!!

export const DataContext = createContext();

 //let url = "http://ec2-3-138-194-210.us-east-2.compute.amazonaws.com:8080"
let url = "http://localhost:8080"


export const DataProvider = ({children}) => {
    const [loading, setLoading ] = useState(false)
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([])
    const [ciudadSelec, setCiudadSelec] = useState([])
    const [ciudad, setCiudad] = useState([])
    const [caracteristicas, setCaracteristicas] = useState([])
    const [reserva, setReserva] = useState([])
    const [usuario, setUsuario] = useState([])
    const [auth, setAuth] = useState(null);
    const [envio, setEnvio] = useState(null);
    const [productoId, setProductoId] = useState([])
    const [productoCategoria, setProductoCaregoria] = useState([])
    const [imagenes, setImagenes] = useState([])
    const [token, setToken] = useState()

    const obtenerProductos = async () => {
        try {
            const urlFin = url+"/producto";
            const results = await axios.get(urlFin);
            setProductos(results.data.respuesta)
        } catch (error) {
            console.log("error", error);
        }
    }

    const sendProducto = async (prod) => {
        axios.post(url+"/producto", prod, { 
        headers: {
            'Authorization': `Bearer ${token}`
          }},)
        .then((response)=> {
            console.log(response);
            setEnvio(response.request.status);
        })
        .catch((error)=> {
            console.log(error);
            setEnvio(error.response.status);
        })
    }
    const sendCaracteristica = async (pc) => {
        axios.post(url+"/producto_caracteristica", pc, { 
        headers: {
            'Authorization': `Bearer ${token}`
          }},)
        .then((response)=> {
            console.log(response);
            
        })
        .catch((error)=> {
            console.log(error);
           
        })
    }
   
    const sendUsuario = async (user) => {
        
        axios.post(url + "/usuario", user)
        .then((response)=> { 
            console.log(response);

        })
        .catch((error)=> {
            console.log(error);
        })
    }


    const obtenerCategorias = async () => {
        try {
            const urlFin = url+"/categoria";
            const results = await axios.get(urlFin);
            setCategorias(results.data.respuesta)
          
        } catch (error) {
            console.log("error", error);
            
        }
        
    } 

    const obtenerCiudad = async () => {
        try {
            const urlFin = url+"/ciudad";
            const results = await axios.get(urlFin);
            setCiudad(results.data.respuesta)
        } catch (error) {
            console.log("error", error);
            
        }
    }

    const obtenerCiudadSelec = async () => {
        try {
            const urlFin = url+"/ciudad";
            const results = await axios.get(urlFin);
            setCiudadSelec(results.data.respuesta)
        } catch (error) {
            console.log("error", error);
            
        }
    }

    const obtenerCaracteristicas = async () => {
        try {
            const urlFin = url+"/caracteristica";
            const results = await axios.get(urlFin);
            setCaracteristicas(results.data.respuesta)
        } catch (error) {
            console.log("error", error);
        }
    } 

     const obtenerReserva = async () => {
         try {
             const urlFin = url+"/usuario";

                 const results = await axios.get(urlFin);

                 
            setReserva(results.data.respuesta)
         } catch (error) {
                    console.log("error", error);
            
         }
    
     }   

     const sendReserva = async (res) => {
        axios.post(url+"/reserva", res, { 
        headers: {
            'Authorization': `Bearer ${token}`
          }},)
        .then((response)=> {
            console.log(response);
        })
        .catch((error)=> {
            console.log(error);
        })
    }
        
    const obtenerProductoID = async (id) => {
        const urlFin = url+`/producto/${id}`;
        try {
            const results = await axios.get(urlFin);
            setProductoId(results.data.respuesta)
        } catch (error) {
            console.log("error", error);
            
        }
        
     } 

     const obtenerProductosPorCatId = async (cat) => {
        
            const urlFin = url + `/producto/categoria/${cat}`;
            
          try {  const results = await axios.get(urlFin);
            setProductoCaregoria(results.data.respuesta)
            console.log(productoCategoria);
        } catch (error) {
            console.log("error", error);
            console.log(urlFin);
        }
        
    } 

    const obtenerImagenes = async () => {
         try {
             const urlFin = url+"/imagen";
             const results = await axios.get(urlFin);
             setImagenes(results.data)
         } catch (error) {
             console.log("error", error);
            
         }
        
     } 

    const sendImagenes = async (img) => {
        axios.post(url+"/imagen", img, { 
        headers: {
            'Authorization': `Bearer ${token}`
          }},)
        .then((response)=> {
            console.log(response);
        })
        .catch((error)=> {
            console.log(error);
        })
    }
        

        
    const getLogin = async user => {
        const res = await axios.post(url+ '/auth/token',user);
            setUsuario(res.data.respuesta.authorities)
            setToken(res.data.respuesta.token)
            localStorage.setItem("token",res.data.respuesta.token);
        }
        
    useEffect(()=> { 
        setLoading(true)
        try {
            obtenerProductos()
            obtenerCategorias()
            obtenerCiudad()
            obtenerCiudadSelec()
            obtenerReserva()
            obtenerCaracteristicas()
            obtenerImagenes() 
        } 
        catch (error) {
            console.log("error", error);
        }
        setLoading(false)
    },[] );
    
    return (
       
        <DataContext.Provider 
        value={{productos, categorias,
                ciudadSelec,  ciudad, setCiudad,
                caracteristicas, usuario, reserva,
                getLogin, envio, auth, setAuth,
                sendUsuario, sendProducto,
                sendCaracteristica, token,
                setUsuario, obtenerProductosPorCatId,
                obtenerProductoID, imagenes,
                sendImagenes, sendReserva,
                 productoCategoria,
        }}
        >
            {children}
        </DataContext.Provider>
       
       
    )

    
}
