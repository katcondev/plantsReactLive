// const webpack = require('webpack')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['v5.airtableusercontent.com', 'katcontrerasdev.github.io'],
},
  env: {
    NEXT_PUBLIC_AT_KEY: process.env.NEXT_PUBLIC_AT_KEY,
    NEXT_PUBLIC_BASE_ID: process.env.NEXT_PUBLIC_BASE_ID,
  },
}

module.exports = nextConfig
