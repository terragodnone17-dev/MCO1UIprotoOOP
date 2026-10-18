# VatAnalyzer - Web UI Implementation (MCO1 OOP)

**Course:** 3rd Year Computer Science / IT - Object-Oriented Programming  
**Instructor:** Sir Ventures  
**Student:** Cabili  
**Source CLI File:** `../JSMCO1OOPCabili.js`  

---

## 📌 Project Overview
This project converts the command-line **VatAnalyzer** program into an intuitive, responsive, and feature-rich Web User Interface (UI), while strictly preserving and honoring the Object-Oriented Programming (OOP) architecture defined in the original `JSMCO1OOPCabili.js`.

---

## 🏗️ Architecture & OOP Mapping

The UI directly implements and instantiates the `forvalidation` class:

| Class / Property / Method | Purpose / Implementation |
| :--- | :--- |
| `class forvalidation` | The primary OOP model encapsulating employee data, deduction policies, and validation |
| `this.SSSpercent = 3` | SSS reduction rate (3%) |
| `this.VatDeduction1 = 4` | BIR / VAT reduction rate (4%) |
| `this.validName1` | Stores the inputted employee name |
| `this.validSalary2` | Stores the inputted monthly salary |
| `displayOrigSalary()` | Parses and returns the numerical float value of the salary |
| `Validanngaran()` | Validates name with regex `/^[a-zA-Z .,]+$/` |
| `ValidanSalary()` | Validates salary with regex `/^[0-9 .,]+$/` |
| `SSS()` | Computes SSS contribution: `Salary * (3 / 100)` |
| `Vat()` | Computes BIR / VAT deduction: `Salary * (4 / 100)` |
| `TotalDeduc()` | Calculates combined total deductions: `Vat() + SSS()` |
| `remaining()` | Calculates net take-home salary: `Salary - TotalDeduc()` |

---

## ✨ UI Features & Enhancements

1. **Dashboard & Summary Cards**:
   - Displays **Gross Salary**, **Total Reductions (7%)**, and **Net Available Balance (93%)** with clear visual hierarchy.
2. **Interactive Allocation Breakdown**:
   - Multi-segment progress bar visually displaying the 93% Net Pay vs 3% SSS vs 4% BIR split.
3. **Dual View (Modern UI + Live CLI Emulator)**:
   - Includes a **CLI Console Simulation** tab showing the identical terminal output formatted by the original `JSMCO1OOPCabili.js` script.
   - Includes a "Copy CLI Output" button to easily copy output for reports or documentation.
4. **Real-time Input Validation**:
   - Visual feedback indicators (green checkmarks or red warnings) based on the exact regex validation rules.
5. **Quick Preset Picks**:
   - 1-click test buttons with realistic sample salaries (₱18k, ₱25k, ₱45k, ₱80k).

---

## 🚀 How to Run

### Method 1: Direct Double-Click (Simplest)
- Double-click `open_app.bat` or `index.html` to open directly in Google Chrome, Microsoft Edge, or Firefox.

### Method 2: Via XAMPP Localhost (Optional)
Since this project is located in `C:\xampp\`, you can also access it through Apache by creating a virtual directory or symlink, or simply opening `index.html` directly in any web browser.

---

## 📂 File Directory

```
MCO1/
├── JSMCO1OOPCabili.js         # Original Node.js CLI script
├── MCO1Procedural.cpp         # Procedural C++ reference
└── WithUI/                    # Web UI Implementation
    ├── index.html             # Semantic markup & UI layout
    ├── style.css              # Modern responsive CSS styling
    ├── script.js              # OOP forvalidation class & UI controller
    ├── README.md              # Project documentation
    └── open_app.bat           # 1-click launcher
```
