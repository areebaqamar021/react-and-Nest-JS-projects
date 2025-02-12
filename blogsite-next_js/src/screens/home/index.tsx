"use client"
import React from 'react'
import AppBanner from './elements/app-banners'
import PostsSection from './elements/posts'
import ContactSetion from './elements/contact-section'

function HomeScreen() {
  return (
    <div>
      <AppBanner />
      <PostsSection />
      <ContactSetion />
    </div>
  )
}

export default HomeScreen
