


class forvalidation {
    constructor(nameperson, Salary) {
        this.SSSpercent = 3;
        this.VatDeduction1 = 4;
        this.validName1 = nameperson;
        this.validSalary2 = Salary;
        this.converted = undefined;
        this.converted2 = undefined;
        this.remainingbal = undefined;
    }

    
    //   Converts salary input to float.
    //   Handles string clean-up (removing commas) so standard formatted numbers parse accurately.
     
    displayOrigSalary() {
        if (typeof this.validSalary2 === 'number') {
            this.converted2 = this.validSalary2;
        } else {
            const cleanStr = String(this.validSalary2).replace(/,/g, '').trim();
            this.converted2 = parseFloat(cleanStr);
        }
        return this.converted2;
    }

    
     // Validates name using the original regex: /^[a-zA-Z .,]+$/
     
    Validanngaran() {
        if (!this.validName1 || typeof this.validName1 !== 'string') {
            return false;
        }

        const trimmed = this.validName1.trim();

        if (trimmed.length === 0) {
            return false;
        }

        const insideValidanngaran =
            /^[a-zA-Z .,]+$/.test(trimmed);

        return insideValidanngaran;
    }


     // Validates salary using the original regex: /^[0-9 .,]+$/
     
    ValidanSalary() {
        if (this.validSalary2 === undefined || this.validSalary2 === null) {
            return false;
        }

        const strVal = String(this.validSalary2).trim();

        if (strVal.length === 0) {
            return false;
        }
        
        const insideValidanSalary = /^[0-9 .,]+$/.test(strVal);

        const parsed = parseFloat(strVal.replace(/,/g, ''));
        
        return insideValidanSalary && !isNaN(parsed) && parsed > 0;
    }

   
    // SSS 3% Reduction
    
    SSS() {
        const valuetobeprintedsss = this.displayOrigSalary() * (this.SSSpercent / 100);
        return valuetobeprintedsss;
    }

   
    // BIR 4% VAT Reduction
     
    Vat() {
        const VatDeduction = this.displayOrigSalary() * (this.VatDeduction1 / 100);
        return VatDeduction;
    }

    
     // Total Reduction = Vat() + SSS()
     
    TotalDeduc() {
        const Total = this.Vat() + this.SSS();
        return Total;
    }

   
     // Available Balance = displayOrigSalary() - TotalDeduc()
     
    remaining() {
        this.remainingbal = this.displayOrigSalary() - this.TotalDeduc();
        return this.remainingbal;
    }
}






//  ==============================================------------------------==============================================--------------------==============================================--------------------------============================================== 







 // ============================================================================
 // UI CONTROLLER & EVENT LISTENERS 
 // Connects the web interface to the forvalidation OOP class.
 // ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements - Form
    const vatForm = document.getElementById('vatForm');
    const employeeNameInput = document.getElementById('employeeName');
    const salaryAmountInput = document.getElementById('salaryAmount');
    const btnClear = document.getElementById('btnClear');
    const groupName = document.getElementById('group-name');
    const groupSalary = document.getElementById('group-salary');
    const nameFeedback = document.getElementById('nameFeedback');
    const salaryFeedback = document.getElementById('salaryFeedback');
    const nameStatus = document.getElementById('nameStatus');
    const salaryStatus = document.getElementById('salaryStatus');

    // DOM Elements - Results
    const emptyState = document.getElementById('emptyState');
    const resultsContainer = document.getElementById('resultsContainer');
    const resWelcomeName = document.getElementById('resWelcomeName');
    const resGrossSalary = document.getElementById('resGrossSalary');
    const resTotalDeductions = document.getElementById('resTotalDeductions');
    const resAvailableBalance = document.getElementById('resAvailableBalance');

    // DOM Elements - Breakdown Table an sa tight side table
    const tblSSS = document.getElementById('tblSSS');
    const tblBIR = document.getElementById('tblBIR');
    const tblTotalDeduc = document.getElementById('tblTotalDeduc');
    const tblNetPay = document.getElementById('tblNetPay');




    //  gin Format number to Peso currency string

    function formatCurrency(amount) {
        return '₱' + Number(amount).toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

   
     // Real-time Validation Helper
  
    function validateInputs(nameVal, salaryVal) {
        const validator = new forvalidation(nameVal, salaryVal);
        const isNameValid = validator.Validanngaran();
        const isSalaryValid = validator.ValidanSalary();

        // Update Name field UI
        if (nameVal.trim() === '') {
            groupName.classList.remove('has-error', 'has-success');
            employeeNameInput.classList.remove('is-valid', 'is-invalid');
            nameFeedback.textContent = 'Letters, spaces, periods, and commas only';
            nameStatus.innerHTML = '';
        } else if (isNameValid) {
            groupName.classList.remove('has-error');
            groupName.classList.add('has-success');
            employeeNameInput.classList.remove('is-invalid');
            employeeNameInput.classList.add('is-valid');
            nameFeedback.textContent = 'Valid name format';
            nameStatus.innerHTML = '<span style="color: #059669; font-weight: bold;">✓</span>';
        } else {
            groupName.classList.remove('has-success');
            groupName.classList.add('has-error');
            employeeNameInput.classList.remove('is-valid');
            employeeNameInput.classList.add('is-invalid');
            nameFeedback.textContent = 'Invalid name. Only letters, spaces, periods, and commas are allowed.';
            nameStatus.innerHTML = '<span style="color: #dc2626; font-weight: bold;">✕</span>';
        }

        // Update Salary field UI
        if (salaryVal.trim() === '') {
            groupSalary.classList.remove('has-error', 'has-success');
            salaryAmountInput.classList.remove('is-valid', 'is-invalid');
            salaryFeedback.textContent = 'Numbers, spaces, periods, and commas only';
            salaryStatus.innerHTML = '';
        } else if (isSalaryValid) {
            groupSalary.classList.remove('has-error');
            groupSalary.classList.add('has-success');
            salaryAmountInput.classList.remove('is-invalid');
            salaryAmountInput.classList.add('is-valid');
            salaryFeedback.textContent = 'Valid salary amount';
            salaryStatus.innerHTML = '<span style="color: #059669; font-weight: bold;">✓</span>';
        } else {
            groupSalary.classList.remove('has-success');
            groupSalary.classList.add('has-error');
            salaryAmountInput.classList.remove('is-valid');
            salaryAmountInput.classList.add('is-invalid');
            salaryFeedback.textContent = 'Invalid salary. Please enter a valid positive number.';
            salaryStatus.innerHTML = '<span style="color: #dc2626; font-weight: bold;">✕</span>';
        }

        return { validator, isNameValid, isSalaryValid };
    }

   
    //   Compute and render results
 
    function executeCalculation(nameperson, Salary) {
        const { validator, isNameValid, isSalaryValid } = validateInputs(nameperson, Salary);

        if (!isNameValid || !isSalaryValid) {
            alert('Invalid Input. Please enter a valid name and salary amount as required by the validation rules.');
            return;
        }

        const gross = validator.displayOrigSalary();
        const sssAmount = validator.SSS();
        const vatAmount = validator.Vat();
        const totalDeductions = validator.TotalDeduc();
        const netSalary = validator.remaining();

        // 1. Update Welcome and KPI summary
        resWelcomeName.textContent = `Welcome, ${nameperson.trim()}!`;
        resGrossSalary.textContent = formatCurrency(gross);
        resTotalDeductions.textContent = formatCurrency(totalDeductions);
        resAvailableBalance.textContent = formatCurrency(netSalary);

        // 2. Update Breakdown Table
        tblSSS.textContent = formatCurrency(sssAmount);
        tblBIR.textContent = formatCurrency(vatAmount);
        tblTotalDeduc.textContent = formatCurrency(totalDeductions);
        tblNetPay.textContent = formatCurrency(netSalary);


        // 4. Reveal Results section if kun gin gin click an calculate add and remove
        emptyState.classList.add('hidden');
        resultsContainer.classList.remove('hidden');


    }

 

















    

    // =========================================================================
    // EVENT LISTENERS
    // =========================================================================

    // Form Submit
    vatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameVal = employeeNameInput.value;
        const salaryVal = salaryAmountInput.value;
        executeCalculation(nameVal, salaryVal);
    });

    // Real-time Input Validation
    employeeNameInput.addEventListener('input', () => {
        validateInputs(employeeNameInput.value, salaryAmountInput.value);
    });

    salaryAmountInput.addEventListener('input', () => {
        validateInputs(employeeNameInput.value, salaryAmountInput.value);
    });


    // Clear Form
    btnClear.addEventListener('click', () => {
        vatForm.reset();
        groupName.classList.remove('has-error', 'has-success');
        groupSalary.classList.remove('has-error', 'has-success');
        employeeNameInput.classList.remove('is-valid', 'is-invalid');
        salaryAmountInput.classList.remove('is-valid', 'is-invalid');
        nameFeedback.textContent = 'Letters, spaces, periods, and commas only';
        salaryFeedback.textContent = 'Numbers, spaces, periods, and commas only';
        nameStatus.innerHTML = '';
        salaryStatus.innerHTML = '';
        employeeNameInput.focus();
        




        // clear button para ma clear kun gin press an clear button sa left side form gamit an add and remove 

        // gin show niya an resultsContainer
        resultsContainer.classList.add('hidden');
        // gin hide niya an empty state
        emptyState.classList.remove('hidden');
    });

});