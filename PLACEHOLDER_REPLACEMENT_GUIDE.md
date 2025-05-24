# CRISP 2025 Website - Placeholder Replacement Guide

This document lists all placeholders that need to be replaced with actual content for the CRISP 2025 conference website.

## IMAGE PLACEHOLDERS

### Logo and Branding
- `placeholder-logo.png` → Replace with actual CRISP 2025 conference logo
- `placeholder-hero-image.jpg` → Replace with conference/IIT(ISM) Dhanbad related image

### Committee Photos
- `placeholder-person.jpg` → Replace with actual photos of:
  - Prof. Sukumar Mishra (Director, IIT(ISM) Dhanbad)
  - Prof. Dheeraj Kumar (Deputy Director, IIT(ISM) Dhanbad)
  - Prof. Shravan Kumar (HOD, FMME Department)
  - Prof. Aarti Kumari (Convenor, FMME Department)
  - Prof. Vishnu Teja Mantripragada (Convenor, FMME Department)

### Sponsor Logos
- `placeholder-sponsor-logo.png` → Replace with actual sponsor logos (4 placeholders total)

### Conference Brochure
- `brochure/CRISP2025-Brochure.pdf` → Create and upload the actual conference brochure PDF file
  - File should be placed in a `brochure` folder in the website root directory
  - Recommended file size: Under 5MB for faster downloads
  - Should include: Conference overview, themes, speakers, schedule, registration info, venue details

## TEXT PLACEHOLDERS

### Contact Information
- `+91 [Phone Number]` → Replace with actual conference phone number
- `info@crisp2025.org` → Replace with actual conference email address

### Important Dates
- `[TBA]` (3 instances) → Replace with actual dates for:
  - Abstract Submission Deadline
  - Notification of Acceptance
  - Full Paper Submission

### Social Media Links
- `href="#"` (4 instances in footer) → Replace with actual social media URLs:
  - Facebook page URL
  - Twitter profile URL
  - LinkedIn page URL
  - Instagram profile URL

## CONTENT UPDATES NEEDED

### Navigation & Links
- All internal navigation links are functional (no changes needed)
- External links in footer social media section need actual URLs

### Registration Pricing
- Current pricing structure is implemented as per requirements:
  - Student: ₹2,000 (Early Bird) / ₹2,500 (Regular)
  - Academic: ₹4,000 (Early Bird) / ₹5,000 (Regular)
  - Industry: ₹6,000 (Early Bird) / ₹7,500 (Regular)
  - International: $150 (Early Bird) / $200 (Regular)
- Verify if these prices are correct and update if needed

### Committee Information
- Current committee structure includes only key positions
- Add remaining core committee members from Requirements.md:
  - Prof. Shatrughan Soren, FMME
  - Prof. B. K. Nandi, FMME
  - Prof. Shalini Gautam, FMME
  - Prof. Madhumanti Bhattacharyya, FMME
  - Prof. Kesavan Ravi, FMME
  - Prof. Rahul MR, FMME
  - Prof. Raj Kumar Dishwar, FMME
  - Prof. Avanish Kumar, FMME
  - Prof. Kasturi Sala, FMME
  - Prof. Vivek Kumar Sahu, FMME
  - Prof. Rajasekhar Reddy Busigari, FMME
  - Prof. Pankaj Kumar Jain, FMME
  - Prof. Anand Anupam, FMME
  - Prof. Subhendu Mishra, FMME
  - Prof. Gaurav Jha, FMME
  - Prof. Shubhi Gupta, FMME
  - Prof. Nitesh Kumar Sahu, FMME

- Add missing advisory committee members:
  - Prof. Alok Kumar Das, Dean (Innovation, Incubation & Entrepreneurship)
  - Prof. S. K. Gupta, Dean (Student Welfare)
  - Prof. R. M. Bhattacharjee, Dean (International Relations & Alumni Affairs)
  - Prof. Rajni Singh, Dean (Corporate Communications)

## OPTIONAL ENHANCEMENTS

### Additional Sections to Consider
- Program Schedule/Agenda
- Keynote Speakers section
- Venue details and maps
- Accommodation information
- Travel information
- FAQ section
- News and announcements

### Functionality Improvements
- Payment gateway integration (currently shows placeholder)
- Email functionality for form submissions
- File download links for templates
- Registration confirmation system

## FILES TO UPDATE

### HTML File (index.html)
- Replace image src attributes with actual file paths
- Update contact information
- Add missing committee members
- Update important dates

### CSS File (styles.css)
- No placeholder updates needed
- Styling is complete and responsive

### JavaScript File (script.js)
- No placeholder updates needed
- All functionality is implemented for standalone website

## HOSTING REQUIREMENTS

Since this is a standalone website (no backend server):
- Can be hosted on any static hosting service
- Recommended platforms: GitHub Pages, Netlify, Vercel, or traditional web hosting
- All files should be uploaded to the hosting platform
- Ensure all image files are uploaded with correct paths

## TESTING CHECKLIST

Before going live:
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile devices
- [ ] Test form submissions and validation
- [ ] Check all images load correctly
- [ ] Verify contact information is accurate
- [ ] Test file upload functionality
- [ ] Confirm pricing calculator works correctly
- [ ] Check social media links work
- [ ] Validate HTML and CSS
- [ ] Test website speed and performance