#!/usr/bin/env python3
"""
Generate thumbnail images for the portfolio.
Creates 4:3 aspect ratio thumbnails (better cropping) at 500px width for faster loading.
"""

import os
from PIL import Image
import sys

def create_thumbnail(input_path, output_path, width=500):
    """
    Create a thumbnail with 4:3 aspect ratio, center-cropped from the original.
    """
    try:
        # Open the image
        img = Image.open(input_path)
        original_width, original_height = img.size
        
        # Calculate target height for 4:3 aspect ratio
        target_height = int(width * 3 / 4)
        
        # Determine crop box to center-crop the image
        # We want to crop the image to fit 4:3 ratio, taking from the center
        original_ratio = original_width / original_height
        target_ratio = 4 / 3
        
        if original_ratio > target_ratio:
            # Image is wider than 4:3, crop width
            crop_width = int(original_height * target_ratio)
            crop_height = original_height
            left = (original_width - crop_width) // 2
            top = 0
        else:
            # Image is taller than 4:3, crop height
            crop_width = original_width
            crop_height = int(original_width / target_ratio)
            left = 0
            top = (original_height - crop_height) // 2
        
        # Crop the image
        img = img.crop((left, top, left + crop_width, top + crop_height))
        
        # Resize to thumbnail size
        img = img.resize((width, target_height), Image.Resampling.LANCZOS)
        
        # Save the thumbnail
        img.save(output_path, quality=85, optimize=True)
        return True, f"Created: {output_path}"
    except Exception as e:
        return False, f"Error processing {input_path}: {str(e)}"

def process_directory(source_dir, output_dir):
    """Process all PNG images in a directory and create thumbnails."""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    results = []
    for filename in sorted(os.listdir(source_dir)):
        if filename.lower().endswith('.png'):
            input_path = os.path.join(source_dir, filename)
            output_filename = filename.replace('.png', '_thumb.png')
            output_path = os.path.join(output_dir, output_filename)
            
            success, message = create_thumbnail(input_path, output_path)
            results.append((filename, success, message))
    
    return results

def main():
    base_path = os.path.dirname(os.path.abspath(__file__))
    
    directories = ['concentration', 'drawings', 'foundation']
    
    print("Generating thumbnails for portfolio images...\n")
    
    all_results = []
    for directory in directories:
        source_dir = os.path.join(base_path, directory)
        output_dir = os.path.join(base_path, directory)
        
        if os.path.exists(source_dir):
            print(f"Processing {directory}/...")
            results = process_directory(source_dir, output_dir)
            all_results.extend(results)
            
            for filename, success, message in results:
                status = "✓" if success else "✗"
                print(f"  {status} {message}")
        else:
            print(f"  Directory not found: {source_dir}")
    
    print(f"\nDone! Generated {sum(1 for _, s, _ in all_results if s)} thumbnails.")

if __name__ == '__main__':
    main()
