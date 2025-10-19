# 📚 Adding Explanations and Tidbits to Quiz Questions

This guide shows you exactly where and how to add explanations and interesting tidbits to your quiz questions.

## 🎯 **Where to Add Explanations**

### **File Locations**
All quiz data is stored in: `src/data/questions/`
- `ramayana.json` - Ramayana questions
- `mahabharata.json` - Mahabharata questions  
- `sanskrit-grammar.json` - Sanskrit Grammar questions

## 📝 **How to Add Explanations**

### **Question Structure**
Each question in your JSON files can now include:

```json
{
  "id": 1,
  "question": "रामस्य पिता कः आसीत्?",
  "options": [
    "दशरथः",
    "जनकः", 
    "भरतः",
    "सुमन्त्रः"
  ],
  "correctAnswer": 0,
  "explanation": "रामायणे दशरथः अयोध्यानगरस्य राजा आसीत्। सः रामस्य, भरतस्य, लक्ष्मणस्य, शत्रुघ्नस्य च पिता आसीत्।",
  "tidbit": "दशरथः नाम 'दशरथः' इति कथ्यते यतः सः दशरथान् (रथान्) एकस्मिन् समये चालयितुं शक्तः आसीत्।"
}
```

### **Field Descriptions**

#### **Required Fields**
- `"id"`: Unique question identifier
- `"question"`: The question text in Sanskrit
- `"options"`: Array of 4 answer choices
- `"correctAnswer"`: Index (0-3) of correct answer

#### **Optional Educational Fields**
- `"explanation"`: Detailed explanation of the correct answer
- `"tidbit"`: Interesting fact or additional information

## ✨ **Example Additions**

### **Ramayana Questions**

#### **Question 1: Rama's Father**
```json
{
  "id": 1,
  "question": "रामस्य पिता कः आसीत्?",
  "options": ["दशरथः", "जनकः", "भरतः", "सुमन्त्रः"],
  "correctAnswer": 0,
  "explanation": "रामायणे दशरथः अयोध्यानगरस्य राजा आसीत्। सः रामस्य, भरतस्य, लक्ष्मणस्य, शत्रुघ्नस्य च पिता आसीत्।",
  "tidbit": "दशरथः नाम 'दशरथः' इति कथ्यते यतः सः दशरथान् (रथान्) एकस्मिन् समये चालयितुं शक्तः आसीत्।"
}
```

#### **Question 2: Sita's Father**
```json
{
  "id": 2,
  "question": "सीतायाः पिता कः आसीत्?",
  "options": ["दशरथः", "जनकः", "विश्वामित्रः", "वसिष्ठः"],
  "correctAnswer": 1,
  "explanation": "सीतायाः पिता जनकः विदेहदेशस्य राजा आसीत्। सः मिथिलानगरस्य राजा आसीत्।",
  "tidbit": "जनकः 'विदेहः' इति अपि कथ्यते यतः सः देहभावं त्यक्त्वा ज्ञानी आसीत्।"
}
```

## 🎨 **How It Appears in the Quiz**

### **When User Answers Correctly**
- ✅ **Message**: "सही उत्तर!" (Correct Answer!)
- 💡 **Explanation**: Detailed explanation appears
- 📚 **Tidbit**: Interesting fact is shown

### **When User Answers Incorrectly**
- ❌ **Message**: "गलत उत्तर" (Wrong Answer)
- 📝 **Correct Answer**: Shows the right answer
- 💡 **Explanation**: Detailed explanation appears
- 📚 **Tidbit**: Interesting fact is shown

## 📝 **Writing Guidelines**

### **Explanations (व्याख्या)**
- **Purpose**: Explain why the answer is correct
- **Language**: Sanskrit or Hindi
- **Length**: 1-2 sentences
- **Content**: Educational and clear

**Example:**
```json
"explanation": "रामायणे दशरथः अयोध्यानगरस्य राजा आसीत्। सः रामस्य, भरतस्य, लक्ष्मणस्य, शत्रुघ्नस्य च पिता आसीत्।"
```

### **Tidbits (रोचक तथ्य)**
- **Purpose**: Share interesting additional information
- **Language**: Sanskrit or Hindi
- **Length**: 1-2 sentences
- **Content**: Fun facts, etymology, cultural context

**Example:**
```json
"tidbit": "दशरथः नाम 'दशरथः' इति कथ्यते यतः सः दशरथान् (रथान्) एकस्मिन् समये चालयितुं शक्तः आसीत्।"
```

## 🚀 **Adding to Your Questions**

### **Step 1: Open the JSON File**
```bash
# Navigate to the questions directory
cd src/data/questions/

# Edit the desired quiz file
# ramayana.json, mahabharata.json, or sanskrit-grammar.json
```

### **Step 2: Add Fields to Each Question**
For each question object, add:
```json
{
  "id": 1,
  "question": "Your question here",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": 0,
  "explanation": "Your explanation here",
  "tidbit": "Your interesting fact here"
}
```

### **Step 3: Save and Test**
- Save the JSON file
- Run `npm run dev` to test
- Check that explanations and tidbits appear

## 🎯 **Best Practices**

### **Content Guidelines**
- **Educational**: Make explanations educational and informative
- **Cultural**: Include cultural and historical context
- **Language**: Use appropriate Sanskrit or Hindi
- **Length**: Keep concise but informative

### **Technical Guidelines**
- **JSON Format**: Ensure proper JSON syntax
- **Encoding**: Use UTF-8 for Sanskrit characters
- **Validation**: Test that the JSON is valid
- **Consistency**: Use consistent formatting

## 📚 **Example Content Ideas**

### **For Ramayana Questions**
- **Explanations**: Character relationships, story context
- **Tidbits**: Etymology of names, cultural significance

### **For Mahabharata Questions**
- **Explanations**: Family relationships, historical context
- **Tidbits**: Philosophical concepts, moral lessons

### **For Sanskrit Grammar Questions**
- **Explanations**: Grammar rules, linguistic concepts
- **Tidbits**: Etymology, linguistic connections

## 🎉 **Result**

When you add explanations and tidbits to your questions:

✅ **Enhanced Learning**: Users get immediate educational feedback
✅ **Cultural Context**: Sanskrit learning is enriched
✅ **Engaging Experience**: Interesting facts keep users engaged
✅ **Educational Value**: Deeper understanding of concepts

Your प्रश्नोत्तरी will become a much more educational and engaging experience!

---

**Ready to enhance your quiz questions!** 📚✨

Add explanations and tidbits to make your Sanskrit quiz more educational and engaging for users.
