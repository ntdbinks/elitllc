#!/bin/bash

echo "🔍 Elite LLC - SEO Audit Report"
echo "================================"
echo ""

# Check for required meta tags
echo "📋 Checking meta tags..."

if grep -q 'name="description"' index.html; then
  echo "✓ Meta description found"
else
  echo "✗ Meta description missing"
fi

if grep -q 'name="keywords"' index.html; then
  echo "✓ Meta keywords found"
else
  echo "✗ Meta keywords missing"
fi

if grep -q 'property="og:title"' index.html; then
  echo "✓ Open Graph title found"
else
  echo "✗ Open Graph title missing"
fi

if grep -q 'property="og:image"' index.html; then
  echo "✓ Open Graph image found"
else
  echo "✗ Open Graph image missing"
fi

if grep -q 'name="twitter:card"' index.html; then
  echo "✓ Twitter card found"
else
  echo "✗ Twitter card missing"
fi

echo ""
echo "🔗 Checking files..."

if [ -f "public/sitemap.xml" ]; then
  echo "✓ Sitemap.xml exists"
else
  echo "✗ Sitemap.xml missing"
fi

if [ -f "public/robots.txt" ]; then
  echo "✓ Robots.txt exists"
else
  echo "✗ Robots.txt missing"
fi

if [ -f "public/manifest.json" ]; then
  echo "✓ Manifest.json exists"
else
  echo "✗ Manifest.json missing"
fi

if [ -f "public/favicon.svg" ]; then
  echo "✓ Favicon.svg exists"
else
  echo "✗ Favicon.svg missing"
fi

if [ -f "public/logo.svg" ]; then
  echo "✓ Logo.svg exists"
else
  echo "✗ Logo.svg missing"
fi

echo ""
echo "✨ SEO Audit Complete!"
