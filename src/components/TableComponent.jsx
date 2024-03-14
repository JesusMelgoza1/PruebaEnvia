import React, { useEffect, useState } from 'react';
import { getCredits } from '../api/getOrders';

const TableComponent = ({ordersPlaced}) => {
    const [orders, setOrders] = useState([]);
    const [localOrders, setLocalOrders] = useState([]);
    const key = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ';

    useEffect(() => {
        setLocalOrders(ordersPlaced);
    }, [ordersPlaced]);

    useEffect(() => {
        // Intenta cargar datos del localStorage al principio
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            setLocalOrders(JSON.parse(storedOrders));
        }
        // Luego, realiza la petición a la API
        getCredits(key)
            .then((res) => {
                if (res.status === 200 && res.statusText === 'OK') {
                    setOrders(res.data.orders);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    // Almacena los datos en el localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(localOrders));
    }, [localOrders]);


    return (
        <>
            <h2 className="text-lg font-semibold leading-7 text-gray-900 mb-3">Lista de ordenes disponibles</h2>
            <div className="h-60  overflow-y-auto">
                <table className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto divide-y divide-gray-200 shadow-md">
                    <thead className="sticky top-0  font-sans text-gray-50" style={{ background: '#0097A0' }}>
                        <tr>    
                            <th>Number</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>SKU</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-x text-center divide-gray-200 font-sans  ">
                        {/* Mostrar datos de la API */}
                        {orders.map((order) => 
                            order.items.map((item) => (
                                <tr key={item.sku}>
                                    <td className="px-6 py-4 whitespace-nowrap">{order.number}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.sku}</td>
                                </tr>
                            ))
                        )}
                        {/* Mostrar datos locales */}
                        {localOrders.map((order, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{order.number}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{order.sku}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableComponent;
