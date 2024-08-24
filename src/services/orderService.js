import axios from 'axios';

const orderService = {
    async getOrderHistory() {
        try {
            // Replace with your API endpoint
            const response = await axios.get('/api/order-history');
            console.log('Order History Response:', response.data); // Log the response data
            return response.data; // Return the data to be used in the component
        } catch (error) {
            console.error('Failed to fetch order history:', error);
            throw error; // Rethrow the error so it can be handled in the component
        }
    }
};

export default orderService;
