'use server'
import { supabase } from '@/lib/supabaseClient';
import { log } from 'console';

export async function getProjectRequests() {
    const { data, error } = await supabase.from('project-requests').select('*');

    if (error) {
        log(data);
        throw new Error(error.message);
    }
    return data;
}