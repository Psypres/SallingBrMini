import toysData from '../data/toys.json';

// Define the Toy interface
export interface Toy {
  id: string;
  name: string;
  emoji: string;
  price: number;
  category: string;
  rarity: string;
}

// Fetch toys from API with fallback to local data
export const fetchToys = async (): Promise<{ toys: Toy[], error: string | null }> => {
  try {
    // API doesn't exist yet, but this will be ready when it does
    const API_URL = 'https://your-api-endpoint.com/toys';
    console.log(`Attempting to fetch toys from API: ${API_URL}`);
    
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`API returned status ${response.status}: ${response.statusText}`);
    }
    
    // Try to parse the response as JSON
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error('Failed to parse API response as JSON:', parseError);
      throw new Error('API returned invalid JSON format');
    }
    
    // Check if response has the expected structure
    if (!Array.isArray(data)) {
      throw new Error('API returned unexpected data format');
    }
    
    console.log(`Successfully fetched ${data.length} toys from API`);
    return { toys: data, error: null };
  } catch (err) {
    // Handle and log all errors with clear messages
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.log(`Falling back to local data. Reason: ${errorMessage}`);
    
    // Return the fallback data with an informative error message
    return { 
      toys: toysData as Toy[], 
      error: `Using local data (API not available: ${errorMessage})` 
    };
  }
}; 