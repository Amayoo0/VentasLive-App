'use server'
import { supabase } from '@/lib/supabaseClient';

export async function getProjectRequests() {
    console.log('Fetching project requests...');
    try {
        const { data, error } = await supabase.from('project_requests').select();

        if (error) {
            console.error('Supabase returned error:', error);
            throw new Error(error.message);
        }

        console.debug('Data:', data);
        return data;
    } catch (err) {
        console.error('Fetch failed:', err);
        throw err;
    }
}
