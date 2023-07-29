import data from './data.json'
import { NextResponse } from 'next/server'


export async function GET(req) {
    return NextResponse.json(data)
}