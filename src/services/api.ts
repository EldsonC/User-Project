import axios from "axios";

const api = axios.create({
    baseURL: "https://zrhwoshjddwgyvsgphgx.supabase.co/rest/v1/",
    headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyaHdvc2hqZGR3Z3l2c2dwaGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYwNzcxNjQsImV4cCI6MTk3MTY1MzE2NH0.ms3cW-7HtdVFtEgIh_lI2kDOVc4igymy0ilQ81uz-4o'
    }
})

export default api;