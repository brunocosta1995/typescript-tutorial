import {z} from 'zod';

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
})

type Tour = z.infer<typeof tourSchema>;

const url = "https://www.course-api.com/react-tours-project";

// type TourData = {
//   id: string,
//   name: string,
//   image: string,
//   info: string,
//   price: string
// }

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Error occurred! ${result.error}`);
    }
    console.log(result);
    
    return result.data;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Error occurred';
    console.log(errorMsg);
    return [];    
  }
}

const arrData = await fetchData(url);

arrData.map((item) => {console.log(item.name)});

