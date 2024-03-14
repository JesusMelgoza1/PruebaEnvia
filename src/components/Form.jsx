    import React, { useState } from 'react'
    import Spinner from './Spinner';
    const Form = ({addOrderToTable, getNextOrderNumber}) => {

        const [formData, setFormData] = useState({
            name: '',
            quantity: '',
            price: '',
            sku: ''
        });
        const [formValid, setFormValid] = useState(false);
        const [loading, setLoading] = useState(false)
        

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
            // Validar el formulario
            const isFormValid = Object.values({
                ...formData,
                [name]: value // Actualizar el campo que ha cambiado
            }).every(value => value.trim() !== '');
            setFormValid(isFormValid);
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            // Crear un nuevo objeto con los datos del formulario
            setLoading(true)
            const newOrder = {
                number: getNextOrderNumber(), // Obtener el próximo número de orden
                name: formData.name,
                quantity: formData.quantity,
                price: formData.price,
                sku: formData.sku
            };
            // Agregar la nueva orden a la tabla
            addOrderToTable(newOrder);
            // addOrderToTable(formData); // Añadir la nueva orden a la tabla
            setFormData({ 
                name: '',
                quantity: '',
                price: '',
                sku: ''})
            setFormValid(false)
            // Simular tiempo de carga con setTimeout
            setTimeout(() => {
                setLoading(false);
            }, 2000); // 2000 milisegundos = 2 segundos
                };

    return (
        <div>
            {loading &&  <> <p className='text-lg font-semibold text-center leading-7 text-gray-900'>Añadiendo orden <Spinner/></p></> }
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">Agrega ordenes</h2>
                    <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Cantidad
                            </label>
                            <div className="mt-2">
                                <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Precio
                            </label>
                            <div className="mt-2">
                                <input
                                type="number"
                                name="price"
                                id="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                SKU
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="sku"
                                id="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>                
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
                        disabled={!formValid}
                        style={{ backgroundColor: formValid ? '#0097A0' : '#CCCCCC' }}
                    >
                        Agregar orden
                    </button>
                </div>
            </form>
        </div>
    )
    }

    export default Form