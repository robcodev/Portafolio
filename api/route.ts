import supabase from '../src/utils/supabase.js'
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const fetchData = async () => {
            const {data, error} = await supabase
                .from('blogPosts')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error);
                return res.status(500).json({
                    error: error.message,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }

           if(data){
               console.log(data);
               return res.status(200).json({
                   body: data,
                   headers: {
                       'Content-Type': 'application/json',
                   },
               });
           }
        }
    }
}
