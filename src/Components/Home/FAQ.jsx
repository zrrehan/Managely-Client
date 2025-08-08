function FAQ() {
    return (
        <div className="py-40 px-4 space-y-6">
            <h1 className="text-5xl font-bold text-center mb-10 text-[rgba(198,27,35,255)]">
                Frequently Asked Questions
            </h1>

            {/* Question 1 */}
            <div className="bg-base-100 border-base-300 collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-red-700 text-4xl font-semibold peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-t-4xl peer-checked:text-secondary-content">
                    What is this platform used for?
                </div>
                <div className="collapse-content text-red-700 text-2xl peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-b-4xl peer-checked:text-secondary-content">
                    This platform is designed to help businesses efficiently manage their workforce by streamlining employee tracking, performance monitoring, payroll, and contract management. Whether you're handling a small team or a large organization, it provides the tools needed to centralize operations, improve productivity, and ensure smooth communication across departments.
                </div>
            </div>

            {/* Question 2 */}
            <div className="bg-base-100 border-base-300 collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-red-700 text-4xl font-semibold peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-t-4xl peer-checked:text-secondary-content">
                    Can I edit employee details after submission?
                </div>
                <div className="collapse-content text-red-700 text-2xl peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-b-4xl peer-checked:text-secondary-content">
                    Yes, administrators have full access to update employee information such as name, role, department, salary, and contract duration at any time. All changes are instantly reflected in the system and are logged for security and transparency, so you’ll always have a traceable update history.
                </div>
            </div>

            {/* Question 3 */}
            <div className="bg-base-100 border-base-300 collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-red-700 text-4xl font-semibold peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-t-4xl peer-checked:text-secondary-content">
                    Is payroll processing automated?
                </div>
                <div className="collapse-content text-red-700 text-2xl peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-b-4xl peer-checked:text-secondary-content">
                    Absolutely. Once an employee’s salary and schedule are configured, our system automatically calculates monthly or bi-weekly payroll based on attendance, work hours, and leave records. It also handles bonus adjustments, deductions, and generates reports for easy payout and auditing.
                </div>
            </div>

            {/* Question 4 */}
            <div className="bg-base-100 border-base-300 collapse collapse-arrow border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-red-700 text-4xl font-semibold peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-t-4xl peer-checked:text-secondary-content">
                    How secure is employee data?
                </div>
                <div className="collapse-content text-red-700 text-2xl peer-checked:bg-gradient-to-l from-[rgba(198,27,35,255)] to-gray-700 rounded-b-4xl peer-checked:text-secondary-content">
                    We take data security very seriously. All employee records are encrypted both at rest and in transit. Access to sensitive data is restricted based on user roles, and two-factor authentication can be enabled for administrators. Our system is built with secure architecture and regularly updated to defend against vulnerabilities and threats.
                </div>
            </div>
        </div>
    );
}

export default FAQ;
