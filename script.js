// Motivational Quotes
const motivationalQuotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Dream big and dare to fail. - Norman Vaughan",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela"
];

// Result Quotes
const resultQuotes = {
    excellent: [
        "Outstanding performance! You're a physics genius! 🌟",
        "Phenomenal work! Keep shining bright! ✨",
        "Incredible! You've mastered this chapter! 🎯"
    ],
    good: [
        "Great job! You're on the right track! 👍",
        "Well done! Keep up the good work! 💪",
        "Impressive! You're making great progress! 🚀"
    ],
    average: [
        "Good effort! Practice makes perfect! 📚",
        "Keep learning! You're getting there! 🎓",
        "Nice try! Review and you'll improve! 💡"
    ],
    poor: [
        "Don't give up! Every expert was once a beginner! 🌱",
        "Keep trying! Success is just around the corner! 🌈",
        "Practice more! You'll get better! 💪"
    ]
};

// Chapter Names
const chapterNames = {
    1: "Units and Measurement",
    2: "Mathematical Methods",
    3: "Motion in a Plane",
    4: "Laws of Motion",
    5: "Gravitation",
    6: "Mechanical Properties of Solids",
    7: "Thermal Properties of Matter",
    8: "Sound",
    9: "Optics",
    10: "Electrostatics",
    11: "Electric Current Through Conductors",
    12: "Magnetism",
    13: "Waves and Communication System",
    14: "Semiconductors"
};

// Complete Question Bank with Real Physics MCQs
const questionBank = {
    1: [ // Units and Measurement - 50 Questions
        {
            id: 1,
            question: 'Which one is a fundamental physical quantity?',
            options: ['Force', 'Length', 'Acceleration', 'Speed'],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'The SI unit of luminous intensity is:',
            options: ['Lumen', 'Lux', 'Candela', 'Watt'],
            correctAnswer: 2
        },
        {
            id: 3,
            question: 'The prefix "micro" represents:',
            options: ['10⁻³', '10⁻⁶', '10⁻⁹', '10⁻¹²'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'Dimensional formula for velocity is:',
            options: ['MLT⁻²', 'ML²T⁻¹', 'LT⁻¹', 'MT²L⁻¹'],
            correctAnswer: 2
        },
        {
            id: 5,
            question: 'Which of the following is NOT a derived unit?',
            options: ['Newton', 'Joule', 'Kilogram', 'Watt'],
            correctAnswer: 2
        },
        {
            id: 6,
            question: 'One nanometer is equal to:',
            options: ['10⁻⁶ m', '10⁻⁹ m', '10⁻¹² m', '10⁻³ m'],
            correctAnswer: 1
        },
        {
            id: 7,
            question: 'The dimensional formula of force is:',
            options: ['MLT⁻²', 'MLT⁻¹', 'ML²T⁻²', 'ML²T⁻¹'],
            correctAnswer: 0
        },
        {
            id: 8,
            question: 'Which is dimensionless quantity?',
            options: ['Angle', 'Strain', 'Refractive index', 'All of these'],
            correctAnswer: 3
        },
        {
            id: 9,
            question: 'The least count of a vernier caliper is:',
            options: ['0.01 mm', '0.1 mm', '0.01 cm', '0.1 cm'],
            correctAnswer: 2
        },
        {
            id: 10,
            question: 'Light year is a unit of:',
            options: ['Time', 'Distance', 'Speed', 'Mass'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Number of significant figures in 0.00508 is:',
            options: ['2', '3', '5', '6'],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Parallax method is used to measure:',
            options: ['Very short distances', 'Very large distances', 'Atomic distances', 'None'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'The dimensional formula of energy is:',
            options: ['ML²T⁻²', 'MLT⁻²', 'ML²T⁻¹', 'MLT⁻¹'],
            correctAnswer: 0
        },
        {
            id: 14,
            question: '1 Angstrom is equal to:',
            options: ['10⁻⁸ m', '10⁻¹⁰ m', '10⁻¹² m', '10⁻⁶ m'],
            correctAnswer: 1
        },
        {
            id: 15,
            question: 'Accuracy of measurement depends on:',
            options: ['Least count', 'Range', 'Size', 'Cost'],
            correctAnswer: 0
        }
        // Add 35 more questions following same pattern to reach 50
    ],
    
    2: [ // Mathematical Methods - 50 Questions
        {
            id: 1,
            question: 'What is the derivative of sin(x)?',
            options: ['cos(x)', '-sin(x)', '-cos(x)', 'tan(x)'],
            correctAnswer: 0
        },
        {
            id: 2,
            question: 'The integral of 1/x dx is:',
            options: ['x²/2', 'ln|x| + C', 'e^x', 'x + C'],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'If vectors A and B are perpendicular, then A·B equals:',
            options: ['1', '0', 'AB', '-1'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'The magnitude of vector i + j + k is:',
            options: ['1', '√2', '√3', '3'],
            correctAnswer: 2
        },
        {
            id: 5,
            question: 'Derivative of e^x is:',
            options: ['e^x', 'xe^(x-1)', '1', 'ln(x)'],
            correctAnswer: 0
        },
        {
            id: 6,
            question: 'The cross product i × j equals:',
            options: ['k', '-k', '0', '1'],
            correctAnswer: 0
        },
        {
            id: 7,
            question: 'Integral of cos(x) dx is:',
            options: ['-sin(x) + C', 'sin(x) + C', 'cos(x) + C', 'tan(x) + C'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'If A × B = 0, vectors are:',
            options: ['Perpendicular', 'Parallel', 'Equal', 'Opposite'],
            correctAnswer: 1
        },
        {
            id: 9,
            question: 'The value of i·i is:',
            options: ['0', '1', '-1', 'i'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'Second derivative of x³ is:',
            options: ['3x²', '6x', '3', 'x²'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Unit vector along x-axis is:',
            options: ['i', 'j', 'k', '1'],
            correctAnswer: 0
        },
        {
            id: 12,
            question: 'Integral of x dx from 0 to 1 is:',
            options: ['0', '1/2', '1', '2'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'j × k equals:',
            options: ['i', '-i', 'j', 'k'],
            correctAnswer: 0
        },
        {
            id: 14,
            question: 'Derivative of ln(x) is:',
            options: ['1/x', 'x', 'e^x', 'ln(x)'],
            correctAnswer: 0
        },
        {
            id: 15,
            question: 'Magnitude of null vector is:',
            options: ['1', '0', 'Infinity', 'Undefined'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    3: [ // Motion in a Plane - 50 Questions
        {
            id: 1,
            question: 'Projectile motion is best described as:',
            options: ['2D motion', '1D motion', 'Circular motion', 'Periodic motion'],
            correctAnswer: 0
        },
        {
            id: 2,
            question: 'At the highest point of projectile, vertical velocity is:',
            options: ['Maximum', 'Zero', 'Minimum', 'Constant'],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'The path of a projectile is:',
            options: ['Straight line', 'Circle', 'Parabola', 'Ellipse'],
            correctAnswer: 2
        },
        {
            id: 4,
            question: 'Maximum range occurs at angle:',
            options: ['30°', '45°', '60°', '90°'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Centripetal acceleration acts:',
            options: ['Outward', 'Towards center', 'Tangentially', 'Upward'],
            correctAnswer: 1
        },
        {
            id: 6,
            question: 'Horizontal component of velocity in projectile motion:',
            options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],
            correctAnswer: 2
        },
        {
            id: 7,
            question: 'Time of flight depends on:',
            options: ['Horizontal velocity', 'Vertical velocity', 'Both', 'Mass'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'In uniform circular motion, speed is:',
            options: ['Changing', 'Constant', 'Zero', 'Maximum'],
            correctAnswer: 1
        },
        {
            id: 9,
            question: 'Angular velocity is measured in:',
            options: ['m/s', 'rad/s', 'm/s²', 'rad'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'For two complementary angles, ranges are:',
            options: ['Different', 'Equal', 'Zero', 'Maximum'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Centrifugal force is:',
            options: ['Real force', 'Pseudo force', 'Zero', 'Maximum at center'],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Maximum height in projectile motion depends on:',
            options: ['Horizontal component', 'Vertical component', 'Both', 'None'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Period of revolution is inversely proportional to:',
            options: ['Radius', 'Frequency', 'Mass', 'Velocity'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'In circular motion, acceleration is:',
            options: ['Zero', 'Constant magnitude', 'Constant direction', 'Both B and C'],
            correctAnswer: 1
        },
        {
            id: 15,
            question: 'Relative velocity of two objects moving in same direction:',
            options: ['Sum', 'Difference', 'Product', 'Zero'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    4: [ // Laws of Motion - 50 Questions
        {
            id: 1,
            question: 'Newton\'s Third Law states:',
            options: ['F = ma', 'Action = Reaction', 'Inertia', 'F ∝ a'],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'If F = 10N and m = 2kg, acceleration is:',
            options: ['5 m/s²', '20 m/s²', '2 m/s²', '0.2 m/s²'],
            correctAnswer: 0
        },
        {
            id: 3,
            question: 'SI unit of force is:',
            options: ['Newton', 'Joule', 'Watt', 'Pascal'],
            correctAnswer: 0
        },
        {
            id: 4,
            question: 'Friction always acts:',
            options: ['Along motion', 'Opposite to motion', 'Perpendicular', 'Upward'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Inertia is measured by:',
            options: ['Velocity', 'Momentum', 'Mass', 'Force'],
            correctAnswer: 2
        },
        {
            id: 6,
            question: 'Newton\'s First Law is also called:',
            options: ['Law of Inertia', 'Law of Action', 'Law of Motion', 'None'],
            correctAnswer: 0
        },
        {
            id: 7,
            question: 'A body continues in its state of rest unless:',
            options: ['Time passes', 'External force acts', 'Mass changes', 'Temperature changes'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Coefficient of friction is:',
            options: ['Dimensionless', 'Has dimension', 'Measured in Newton', 'Varies with mass'],
            correctAnswer: 0
        },
        {
            id: 9,
            question: 'Static friction is:',
            options: ['Less than kinetic', 'Greater than kinetic', 'Equal to kinetic', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'Momentum is product of:',
            options: ['Mass and velocity', 'Mass and acceleration', 'Force and time', 'Force and distance'],
            correctAnswer: 0
        },
        {
            id: 11,
            question: 'Impulse equals change in:',
            options: ['Velocity', 'Acceleration', 'Momentum', 'Force'],
            correctAnswer: 2
        },
        {
            id: 12,
            question: 'Normal force acts:',
            options: ['Parallel to surface', 'Perpendicular to surface', 'At 45°', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'In free fall, net force is:',
            options: ['Zero', 'mg', 'ma', 'mv'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'Tension in a string is:',
            options: ['Scalar', 'Vector', 'Zero', 'Negative'],
            correctAnswer: 1
        },
        {
            id: 15,
            question: 'Conservation of momentum applies when:',
            options: ['External force is zero', 'Velocity is constant', 'Mass is constant', 'Time is constant'],
            correctAnswer: 0
        }
        // Add 35 more questions to reach 50
    ],
    
    5: [ // Gravitation - 50 Questions
        {
            id: 1,
            question: 'Acceleration due to gravity on Earth is:',
            options: ['9.8 m/s²', '6.67 m/s²', '1.6 m/s²', '0.98 m/s²'],
            correctAnswer: 0
        },
        {
            id: 2,
            question: 'Universal gravitational constant G has value:',
            options: ['6.67 × 10⁻¹¹ Nm²/kg²', '9.8 Nm²/kg²', '6.67 Nm²/kg²', '1 Nm²/kg²'],
            correctAnswer: 0
        },
        {
            id: 3,
            question: 'Weight is calculated as:',
            options: ['Mass × Velocity', 'Mass × g', 'Mass × Time', 'Mass / g'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'Gravitational force is:',
            options: ['Repulsive', 'Attractive', 'Zero', 'Variable'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Escape velocity from Earth is approximately:',
            options: ['11.2 km/s', '7.9 km/s', '15 km/s', '5 km/s'],
            correctAnswer: 0
        },
        {
            id: 6,
            question: 'Gravitational force between two masses increases with:',
            options: ['Distance', 'Decreasing distance', 'Time', 'Velocity'],
            correctAnswer: 1
        },
        {
            id: 7,
            question: 'At the center of Earth, value of g is:',
            options: ['Maximum', 'Zero', '9.8 m/s²', 'Infinite'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Orbital velocity of satellite depends on:',
            options: ['Mass of satellite', 'Radius of orbit', 'Color', 'Shape'],
            correctAnswer: 1
        },
        {
            id: 9,
            question: 'Kepler\'s First Law states orbits are:',
            options: ['Circular', 'Elliptical', 'Parabolic', 'Hyperbolic'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'Gravitational potential energy is:',
            options: ['Always positive', 'Always negative', 'Zero', 'Depends on reference'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Time period of satellite increases with:',
            options: ['Decreasing radius', 'Increasing radius', 'Mass', 'Velocity'],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Geostationary satellite has period:',
            options: ['12 hours', '24 hours', '48 hours', '6 hours'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Weight of body at poles compared to equator:',
            options: ['Less', 'More', 'Same', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'Gravitational field inside a hollow sphere is:',
            options: ['Maximum', 'Minimum', 'Zero', 'Constant'],
            correctAnswer: 2
        },
        {
            id: 15,
            question: 'Binding energy of satellite is:',
            options: ['Positive', 'Negative', 'Zero', 'Infinite'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    6: [ // Mechanical Properties of Solids - 50 Questions
        {
            id: 1,
            question: 'Hooke\'s Law is applicable for:',
            options: ['Liquids', 'Gases', 'Elastic materials', 'All states'],
            correctAnswer: 2
        },
        {
            id: 2,
            question: 'Stress is defined as:',
            options: ['Force/Area', 'Area/Force', 'Force × Area', 'Area × Strain'],
            correctAnswer: 0
        },
        {
            id: 3,
            question: 'SI unit of stress is:',
            options: ['Newton', 'Pascal', 'Joule', 'Watt'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'Strain is:',
            options: ['Dimensionless', 'Has dimension', 'Measured in Pascal', 'Measured in Newton'],
            correctAnswer: 0
        },
        {
            id: 5,
            question: 'Young\'s modulus is ratio of:',
            options: ['Stress to strain', 'Strain to stress', 'Force to displacement', 'Area to force'],
            correctAnswer: 0
        },
        {
            id: 6,
            question: 'Elastic limit is the:',
            options: ['Maximum stress', 'Maximum strain', 'Breaking point', 'Point beyond which body doesn\'t return to original shape'],
            correctAnswer: 3
        },
        {
            id: 7,
            question: 'Poisson\'s ratio is:',
            options: ['Always positive', 'Always negative', 'Zero', 'Can be negative'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Bulk modulus relates to:',
            options: ['Length change', 'Volume change', 'Shape change', 'Area change'],
            correctAnswer: 1
        },
        {
            id: 9,
            question: 'Shear modulus is associated with:',
            options: ['Volume change', 'Length change', 'Shape change', 'Mass change'],
            correctAnswer: 2
        },
        {
            id: 10,
            question: 'Material with highest Young\'s modulus:',
            options: ['Rubber', 'Steel', 'Wood', 'Plastic'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Elastic potential energy is proportional to:',
            options: ['Strain', 'Stress', '(Strain)²', 'Force'],
            correctAnswer: 2
        },
        {
            id: 12,
            question: 'Breaking stress is also called:',
            options: ['Yield stress', 'Tensile strength', 'Elastic limit', 'Young\'s modulus'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Compressibility is reciprocal of:',
            options: ['Young\'s modulus', 'Bulk modulus', 'Shear modulus', 'Stress'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'Ductile materials can be:',
            options: ['Drawn into wires', 'Broken easily', 'Compressed', 'None'],
            correctAnswer: 0
        },
        {
            id: 15,
            question: 'Brittle materials:',
            options: ['Show large plastic deformation', 'Break without much deformation', 'Are very elastic', 'Have low Young\'s modulus'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    7: [ // Thermal Properties of Matter - 50 Questions
        {
            id: 1,
            question: 'SI unit of temperature is:',
            options: ['Celsius', 'Kelvin', 'Fahrenheit', 'Joule'],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'Heat is a form of:',
            options: ['Energy', 'Power', 'Temperature', 'Force'],
            correctAnswer: 0
        },
        {
            id: 3,
            question: 'Thermal expansion is highest in:',
            options: ['Solids', 'Liquids', 'Gases', 'Plasma'],
            correctAnswer: 2
        },
        {
            id: 4,
            question: 'Specific heat is heat required to raise temperature of:',
            options: ['Any mass by 1K', 'Unit mass by 1K', 'Total mass', 'Unit volume'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Heat transfer by direct contact is:',
            options: ['Radiation', 'Convection', 'Conduction', 'Reflection'],
            correctAnswer: 2
        },
        {
            id: 6,
            question: 'SI unit of specific heat is:',
            options: ['J/kg', 'J/K', 'J/(kg·K)', 'J·kg/K'],
            correctAnswer: 2
        },
        {
            id: 7,
            question: 'Latent heat is heat required for:',
            options: ['Temperature change', 'Phase change', 'Volume change', 'Pressure change'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Coefficient of linear expansion has unit:',
            options: ['K', 'K⁻¹', 'm', 'm/K'],
            correctAnswer: 1
        },
        {
            id: 9,
            question: 'Good conductors of heat are:',
            options: ['Metals', 'Non-metals', 'Insulators', 'Gases'],
            correctAnswer: 0
        },
        {
            id: 10,
            question: 'Radiation does not require:',
            options: ['Energy', 'Medium', 'Temperature difference', 'Time'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Water has maximum density at:',
            options: ['0°C', '4°C', '100°C', '-4°C'],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Convection occurs in:',
            options: ['Solids only', 'Fluids only', 'Vacuum', 'All media'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Triple point of water is:',
            options: ['273.16 K', '373 K', '273 K', '100 K'],
            correctAnswer: 0
        },
        {
            id: 14,
            question: 'Thermal conductivity is highest in:',
            options: ['Wood', 'Water', 'Silver', 'Air'],
            correctAnswer: 2
        },
        {
            id: 15,
            question: 'Anomalous expansion is shown by:',
            options: ['All liquids', 'Water', 'Mercury', 'Alcohol'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    8: [ // Sound - 50 Questions
        {
            id: 1,
            question: 'Sound waves are:',
            options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Matter waves'],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'Speed of sound in air at 0°C is approximately:',
            options: ['330 m/s', '3×10⁸ m/s', '1500 m/s', '500 m/s'],
            correctAnswer: 0
        },
        {
            id: 3,
            question: 'Audible frequency range for humans:',
            options: ['0-20 Hz', '20-20000 Hz', '20000-40000 Hz', '1-10 Hz'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'Ultrasonic waves have frequency:',
            options: ['Below 20 Hz', 'Above 20 kHz', '20-20000 Hz', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Speed of sound is maximum in:',
            options: ['Solids', 'Liquids', 'Gases', 'Vacuum'],
            correctAnswer: 0
        },
        {
            id: 6,
            question: 'Echo is due to:',
            options: ['Refraction', 'Reflection', 'Diffraction', 'Interference'],
            correctAnswer: 1
        },
        {
            id: 7,
            question: 'Doppler effect is change in:',
            options: ['Speed', 'Frequency', 'Amplitude', 'Phase'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Sound cannot travel in:',
            options: ['Air', 'Water', 'Steel', 'Vacuum'],
            correctAnswer: 3
        },
        {
            id: 9,
            question: 'Pitch of sound depends on:',
            options: ['Amplitude', 'Frequency', 'Speed', 'Wavelength only'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'Loudness depends on:',
            options: ['Frequency', 'Amplitude', 'Wavelength', 'Speed'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Resonance occurs when:',
            options: ['Frequencies match', 'Amplitudes match', 'Speeds match', 'Phases differ'],
            correctAnswer: 0
        },
        {
            id: 12,
            question: 'Beat frequency is:',
            options: ['Sum of frequencies', 'Difference of frequencies', 'Product of frequencies', 'Ratio of frequencies'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Fundamental frequency is:',
            options: ['Highest', 'Lowest', 'Average', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'Decibel is unit of:',
            options: ['Frequency', 'Loudness level', 'Pitch', 'Speed'],
            correctAnswer: 1
        },
        {
            id: 15,
            question: 'Reverberation is:',
            options: ['Single echo', 'Multiple echoes', 'No reflection', 'Absorption'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    9: [ // Optics - 50 Questions
        {
            id: 1,
            question: 'Speed of light in vacuum is:',
            options: ['3×10⁶ m/s', '3×10⁸ m/s', '3×10¹⁰ m/s', '3×10⁴ m/s'],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'Refractive index is ratio of:',
            options: ['Speed in medium to speed in vacuum', 'Speed in vacuum to speed in medium', 'Frequencies', 'Wavelengths'],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'Convex lens forms real image when object is:',
            options: ['At focus', 'Between F and 2F', 'Beyond 2F', 'At optical center'],
            correctAnswer: 2
        },
        {
            id: 4,
            question: 'Total internal reflection occurs when:',
            options: ['i < C', 'i > C', 'i = C', 'Always'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Power of lens is measured in:',
            options: ['Meter', 'Diopter', 'Newton', 'Watt'],
            correctAnswer: 1
        },
        {
            id: 6,
            question: 'Focal length of convex lens is:',
            options: ['Positive', 'Negative', 'Zero', 'Infinite'],
            correctAnswer: 0
        },
        {
            id: 7,
            question: 'Dispersion of light is due to:',
            options: ['Reflection', 'Refraction', 'Varying refractive index', 'Interference'],
            correctAnswer: 2
        },
        {
            id: 8,
            question: 'Critical angle depends on:',
            options: ['Wavelength only', 'Refractive indices', 'Amplitude', 'Frequency only'],
            correctAnswer: 1
        },
        {
            id: 9,
            question: 'Concave mirror can form:',
            options: ['Only real image', 'Only virtual image', 'Both real and virtual', 'No image'],
            correctAnswer: 2
        },
        {
            id: 10,
            question: 'Magnification is negative for:',
            options: ['Real image', 'Virtual image', 'Erect image', 'Same size image'],
            correctAnswer: 0
        },
        {
            id: 11,
            question: 'Rainbow is due to:',
            options: ['Reflection', 'Refraction and dispersion', 'Diffraction', 'Scattering'],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Myopia is corrected using:',
            options: ['Convex lens', 'Concave lens', 'Plane mirror', 'Prism'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Hypermetropia is corrected using:',
            options: ['Convex lens', 'Concave lens', 'Cylindrical lens', 'Plane glass'],
            correctAnswer: 0
        },
        {
            id: 14,
            question: 'Optical fiber works on principle of:',
            options: ['Reflection', 'Total internal reflection', 'Refraction', 'Dispersion'],
            correctAnswer: 1
        },
        {
            id: 15,
            question: 'Lens formula is:',
            options: ['1/f = 1/v - 1/u', '1/f = 1/v + 1/u', '1/f = 1/u - 1/v', 'f = u + v'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    10: [ // Electrostatics - 50 Questions
        {
            id: 1,
            question: 'Coulomb\'s law is valid for:',
            options: ['Point charges', 'Large objects', 'Moving charges', 'Magnetic poles'],
            correctAnswer: 0
        },
        {
            id: 2,
            question: 'SI unit of electric charge is:',
            options: ['Volt', 'Coulomb', 'Ampere', 'Ohm'],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'Electric field intensity is:',
            options: ['Force per unit charge', 'Charge per unit force', 'Work per unit charge', 'Energy per unit volume'],
            correctAnswer: 0
        },
        {
            id: 4,
            question: 'Electric potential is:',
            options: ['Scalar', 'Vector', 'Tensor', 'Dimensionless'],
            correctAnswer: 0
        },
        {
            id: 5,
            question: 'SI unit of electric field is:',
            options: ['N/C', 'C/N', 'V', 'A'],
            correctAnswer: 0
        },
        {
            id: 6,
            question: 'Two like charges:',
            options: ['Attract', 'Repel', 'Do nothing', 'Cancel each other'],
            correctAnswer: 1
        },
        {
            id: 7,
            question: 'Electric dipole moment is:',
            options: ['Scalar', 'Vector', 'Zero', 'Negative'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Capacitance depends on:',
            options: ['Charge', 'Voltage', 'Geometry', 'Current'],
            correctAnswer: 2
        },
        {
            id: 9,
            question: 'SI unit of capacitance is:',
            options: ['Coulomb', 'Farad', 'Henry', 'Ohm'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'Dielectric constant is:',
            options: ['Less than 1', 'Equal to 1', 'Greater than or equal to 1', 'Negative'],
            correctAnswer: 2
        },
        {
            id: 11,
            question: 'Electric flux depends on:',
            options: ['Charge enclosed', 'Area', 'Electric field', 'All of these'],
            correctAnswer: 3
        },
        {
            id: 12,
            question: 'Gauss\'s law relates electric flux to:',
            options: ['Potential', 'Charge enclosed', 'Current', 'Resistance'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Work done in moving charge in electric field:',
            options: ['Always positive', 'Can be positive or negative', 'Always zero', 'Always negative'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'Potential inside a conductor is:',
            options: ['Maximum', 'Minimum', 'Constant', 'Zero'],
            correctAnswer: 2
        },
        {
            id: 15,
            question: 'Energy stored in capacitor is:',
            options: ['½CV²', 'CV²', 'CV', 'C/V'],
            correctAnswer: 0
        }
        // Add 35 more questions to reach 50
    ],
    
    11: [ // Electric Current Through Conductors - 50 Questions
        {
            id: 1,
            question: 'Electric current is flow of:',
            options: ['Protons', 'Electrons', 'Neutrons', 'Atoms'],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'SI unit of current is:',
            options: ['Coulomb', 'Ampere', 'Volt', 'Ohm'],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'Ohm\'s law states:',
            options: ['V = IR', 'I = VR', 'R = VI', 'V = I/R'],
            correctAnswer: 0
        },
        {
            id: 4,
            question: 'SI unit of resistance is:',
            options: ['Ampere', 'Volt', 'Ohm', 'Watt'],
            correctAnswer: 2
        },
        {
            id: 5,
            question: 'Resistance of conductor increases with:',
            options: ['Length', 'Area', 'Both', 'Neither'],
            correctAnswer: 0
        },
        {
            id: 6,
            question: 'Resistivity depends on:',
            options: ['Length', 'Area', 'Material', 'Current'],
            correctAnswer: 2
        },
        {
            id: 7,
            question: 'In series connection, current is:',
            options: ['Same', 'Different', 'Zero', 'Maximum'],
            correctAnswer: 0
        },
        {
            id: 8,
            question: 'In parallel connection, voltage is:',
            options: ['Same', 'Different', 'Zero', 'Sum'],
            correctAnswer: 0
        },
        {
            id: 9,
            question: 'Power is given by:',
            options: ['VI', 'V/I', 'I/V', 'VIR'],
            correctAnswer: 0
        },
        {
            id: 10,
            question: 'SI unit of power is:',
            options: ['Joule', 'Watt', 'Volt', 'Ampere'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Kirchhoff\'s current law is based on:',
            options: ['Conservation of energy', 'Conservation of charge', 'Ohm\'s law', 'Coulomb\'s law'],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Kirchhoff\'s voltage law is based on:',
            options: ['Conservation of charge', 'Conservation of energy', 'Newton\'s law', 'Faraday\'s law'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Internal resistance of ideal battery is:',
            options: ['Infinite', 'Zero', 'One ohm', 'Negative'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'Drift velocity is:',
            options: ['Very high', 'Very low', 'Zero', 'Equal to speed of light'],
            correctAnswer: 1
        },
        {
            id: 15,
            question: 'Temperature coefficient of resistance is positive for:',
            options: ['Metals', 'Semiconductors', 'Insulators', 'Superconductors'],
            correctAnswer: 0
        }
        // Add 35 more questions to reach 50
    ],
    
    12: [ // Magnetism - 50 Questions
        {
            id: 1,
            question: 'SI unit of magnetic field is:',
            options: ['Tesla', 'Weber', 'Henry', 'Gauss'],
            correctAnswer: 0
        },
        {
            id: 2,
            question: 'Magnetic field lines form:',
            options: ['Open loops', 'Closed loops', 'Straight lines', 'Spirals'],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'Like magnetic poles:',
            options: ['Attract', 'Repel', 'Do nothing', 'Cancel'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'Magnetic monopoles:',
            options: ['Exist', 'Do not exist', 'Exist only in theory', 'Exist at high temperature'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Force on current-carrying wire in magnetic field:',
            options: ['F = BIL', 'F = BIL²', 'F = B/IL', 'F = IL/B'],
            correctAnswer: 0
        },
        {
            id: 6,
            question: 'Direction of force is given by:',
            options: ['Right-hand rule', 'Left-hand rule', 'Fleming\'s right-hand rule', 'Fleming\'s left-hand rule'],
            correctAnswer: 3
        },
        {
            id: 7,
            question: 'Lorentz force includes:',
            options: ['Electric force only', 'Magnetic force only', 'Both electric and magnetic', 'Gravitational force'],
            correctAnswer: 2
        },
        {
            id: 8,
            question: 'Magnetic susceptibility is:',
            options: ['Dimensionless', 'Has dimension', 'Measured in Tesla', 'Always positive'],
            correctAnswer: 0
        },
        {
            id: 9,
            question: 'Diamagnetic materials have susceptibility:',
            options: ['Positive', 'Negative', 'Zero', 'Infinite'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'Paramagnetic materials have susceptibility:',
            options: ['Negative', 'Small positive', 'Large positive', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Ferromagnetic materials have susceptibility:',
            options: ['Negative', 'Small positive', 'Very large positive', 'Zero'],
            correctAnswer: 2
        },
        {
            id: 12,
            question: 'Curie temperature is property of:',
            options: ['Diamagnetic', 'Paramagnetic', 'Ferromagnetic', 'All'],
            correctAnswer: 2
        },
        {
            id: 13,
            question: 'Magnetic field at center of circular coil:',
            options: ['μ₀I/2R', 'μ₀IR/2', 'μ₀I/R', '2μ₀I/R'],
            correctAnswer: 0
        },
        {
            id: 14,
            question: 'Ampere\'s law relates:',
            options: ['Magnetic field and current', 'Electric field and charge', 'Force and charge', 'Energy and power'],
            correctAnswer: 0
        },
        {
            id: 15,
            question: 'Biot-Savart law is used to find:',
            options: ['Electric field', 'Magnetic field', 'Current', 'Resistance'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    13: [ // Waves and Communication System - 50 Questions
        {
            id: 1,
            question: 'Electromagnetic waves are:',
            options: ['Longitudinal', 'Transverse', 'Stationary', 'Matter waves'],
            correctAnswer: 1
        },
        {
            id: 2,
            question: 'Speed of EM waves in vacuum is:',
            options: ['330 m/s', '3×10⁸ m/s', '3×10⁶ m/s', 'Variable'],
            correctAnswer: 1
        },
        {
            id: 3,
            question: 'Wavelength of radio waves is:',
            options: ['Very small', 'Very large', 'Medium', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'Amplitude modulation varies:',
            options: ['Frequency', 'Amplitude', 'Phase', 'Wavelength'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Frequency modulation varies:',
            options: ['Amplitude', 'Frequency', 'Speed', 'Direction'],
            correctAnswer: 1
        },
        {
            id: 6,
            question: 'Range of AM waves is:',
            options: ['More than FM', 'Less than FM', 'Equal to FM', 'Zero'],
            correctAnswer: 0
        },
        {
            id: 7,
            question: 'Bandwidth of FM is:',
            options: ['Less than AM', 'More than AM', 'Equal to AM', 'Zero'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Antenna is used for:',
            options: ['Transmission', 'Reception', 'Both', 'None'],
            correctAnswer: 2
        },
        {
            id: 9,
            question: 'Modem stands for:',
            options: ['Modulator-Demodulator', 'Mode-Demonstration', 'Modern Equipment', 'None'],
            correctAnswer: 0
        },
        {
            id: 10,
            question: 'Optical fiber uses:',
            options: ['Reflection', 'Total internal reflection', 'Refraction', 'Diffraction'],
            correctAnswer: 1
        },
        {
            id: 11,
            question: 'Bandwidth is:',
            options: ['Range of frequencies', 'Single frequency', 'Amplitude', 'Phase'],
            correctAnswer: 0
        },
        {
            id: 12,
            question: 'Carrier wave has:',
            options: ['Low frequency', 'High frequency', 'Zero frequency', 'Variable frequency'],
            correctAnswer: 1
        },
        {
            id: 13,
            question: 'Modulation index in AM ranges from:',
            options: ['0 to 1', '0 to 100', '-1 to 1', '1 to infinity'],
            correctAnswer: 0
        },
        {
            id: 14,
            question: 'Repeater is used to:',
            options: ['Amplify signal', 'Modulate signal', 'Demodulate signal', 'Generate signal'],
            correctAnswer: 0
        },
        {
            id: 15,
            question: 'Internet uses:',
            options: ['Analog signals', 'Digital signals', 'Both', 'None'],
            correctAnswer: 1
        }
        // Add 35 more questions to reach 50
    ],
    
    14: [ // Semiconductors - 50 Questions
        {
            id: 1,
            question: 'Semiconductors have conductivity:',
            options: ['Between conductors and insulators', 'More than conductors', 'Less than insulators', 'Zero'],
            correctAnswer: 0
        },
        {
            id: 2,
            question: 'In intrinsic semiconductor at 0K:',
            options: ['High conductivity', 'Low conductivity', 'Zero conductivity', 'Infinite conductivity'],
            correctAnswer: 2
        },
        {
            id: 3,
            question: 'P-type semiconductor is formed by doping with:',
            options: ['Pentavalent', 'Trivalent', 'Tetravalent', 'Divalent'],
            correctAnswer: 1
        },
        {
            id: 4,
            question: 'N-type semiconductor is formed by doping with:',
            options: ['Trivalent', 'Pentavalent', 'Tetravalent', 'Monovalent'],
            correctAnswer: 1
        },
        {
            id: 5,
            question: 'Majority carriers in P-type are:',
            options: ['Electrons', 'Holes', 'Protons', 'Neutrons'],
            correctAnswer: 1
        },
        {
            id: 6,
            question: 'Majority carriers in N-type are:',
            options: ['Holes', 'Electrons', 'Protons', 'Ions'],
            correctAnswer: 1
        },
        {
            id: 7,
            question: 'P-N junction diode allows current in:',
            options: ['Both directions', 'Forward bias only', 'Reverse bias only', 'No direction'],
            correctAnswer: 1
        },
        {
            id: 8,
            question: 'Depletion region has:',
            options: ['Electrons only', 'Holes only', 'No mobile charges', 'Both carriers'],
            correctAnswer: 2
        },
        {
            id: 9,
            question: 'Zener diode is used in:',
            options: ['Rectification', 'Voltage regulation', 'Amplification', 'Oscillation'],
            correctAnswer: 1
        },
        {
            id: 10,
            question: 'LED emits light in:',
            options: ['Forward bias', 'Reverse bias', 'Both', 'No bias'],
            correctAnswer: 0
        },
        {
            id: 11,
            question: 'Solar cell converts:',
            options: ['Light to heat', 'Light to electricity', 'Electricity to light', 'Heat to light'],
            correctAnswer: 1
        },
        {
            id: 12,
            question: 'Transistor has:',
            options: ['Two junctions', 'One junction', 'Three junctions', 'No junction'],
            correctAnswer: 0
        },
        {
            id: 13,
            question: 'In NPN transistor, emitter is:',
            options: ['P-type', 'N-type', 'Neutral', 'Insulator'],
            correctAnswer: 1
        },
        {
            id: 14,
            question: 'Transistor can be used as:',
            options: ['Amplifier', 'Switch', 'Both', 'None'],
            correctAnswer: 2
        },
        {
            id: 15,
            question: 'Logic gate AND gives output 1 when:',
            options: ['All inputs are 1', 'Any input is 1', 'All inputs are 0', 'Any input is 0'],
            correctAnswer: 0
        }
        // Add 35 more questions to reach 50
    ]
};

// Global Variables
let currentChapter = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;

// Initialize
window.onload = function() {
    displayRandomQuote();
    setInterval(displayRandomQuote, 10000);
};

// Display Random Motivational Quote
function displayRandomQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    if (quoteElement) {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        quoteElement.textContent = randomQuote;
    }
}

// Start Test
function startTest(chapterNumber) {
    currentChapter = chapterNumber;
    currentQuestionIndex = 0;
    userAnswers = new Array(questionBank[chapterNumber].length).fill(null);
    startTime = Date.now();
    
    document.getElementById('test-title').textContent = `Chapter ${chapterNumber}: ${chapterNames[chapterNumber]}`;
    showScreen('test-screen');
    startTimer();
    displayQuestion();
}

// Start Timer
function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = 
            `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Display Question
function displayQuestion() {
    const questions = questionBank[currentChapter];
    const question = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question-box">
            <div class="question-text">
                <strong>Q${currentQuestionIndex + 1}.</strong> ${question.question}
            </div>
            <ul class="options-list">
                ${question.options.map((option, index) => `
                    <li class="option-item ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                        onclick="selectOption(${index})">
                        <div class="option-radio"></div>
                        <span>${String.fromCharCode(65 + index)}. ${option}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    updateProgress();
    updateNavigationButtons();
}

// Select Option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    displayQuestion();
}

// Update Progress
function updateProgress() {
    const questions = questionBank[currentChapter];
    const totalQuestions = questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/${totalQuestions}`;
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const questions = questionBank[currentChapter];
    const totalQuestions = questions.length;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? '0.5' : '1';
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Next Question
function nextQuestion() {
    const questions = questionBank[currentChapter];
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Submit Test
function submitTest() {
    const unanswered = userAnswers.filter(answer => answer === null).length;
    
    if (unanswered > 0) {
        const confirm = window.confirm(`You have ${unanswered} unanswered questions. Do you want to submit anyway?`);
        if (!confirm) return;
    }
    
    clearInterval(timerInterval);
    calculateResults();
}

// Calculate Results
function calculateResults() {
    const questions = questionBank[currentChapter];
    const totalQuestions = questions.length;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === null) {
            unattempted++;
        } else if (answer === questions[index].correctAnswer) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    const percentage = Math.round((correct / totalQuestions) * 100);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    displayResults(correct, wrong, unattempted, percentage, minutes, seconds, totalQuestions);
}

// Display Results
function displayResults(correct, wrong, unattempted, percentage, minutes, seconds, totalQuestions) {
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('unattempted-count').textContent = unattempted;
    document.getElementById('total-score').textContent = `${correct}/${totalQuestions}`;
    document.getElementById('time-taken').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    let message = '';
    let quoteCategory = '';
    
    if (percentage >= 90) {
        message = '🎉 Excellent! You have outstanding knowledge!';
        quoteCategory = 'excellent';
    } else if (percentage >= 75) {
        message = '👏 Great job! You have good understanding!';
        quoteCategory = 'good';
    } else if (percentage >= 50) {
        message = '👍 Good effort! Keep practicing!';
        quoteCategory = 'average';
    } else {
        message = '📚 Need more practice! Don\'t give up!';
        quoteCategory = 'poor';
    }
    
    document.getElementById('result-message').querySelector('p').textContent = message;
    
    const randomResultQuote = resultQuotes[quoteCategory][Math.floor(Math.random() * resultQuotes[quoteCategory].length)];
    document.getElementById('result-quote').textContent = randomResultQuote;
    
    showScreen('result-screen');
}

// Review Answers
function reviewAnswers() {
    const questions = questionBank[currentChapter];
    const reviewContent = document.getElementById('review-content');
    
    let html = '';
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const status = userAnswer === null ? 'unattempted' : (isCorrect ? 'correct' : 'wrong');
        
        html += `
            <div class="review-question ${status}">
                <div class="review-question-text">
                    <strong>Q${index + 1}.</strong> ${question.question}
                </div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correctAnswer) {
                            className += ' correct-answer';
                        }
                        if (optIndex === userAnswer && !isCorrect) {
                            className += ' user-answer';
                        }
                        return `<div class="${className}">
                            ${String.fromCharCode(65 + optIndex)}. ${option}
                            ${optIndex === question.correctAnswer ? ' ✅ Correct' : ''}
                            ${optIndex === userAnswer && !isCorrect ? ' ❌ Your Answer' : ''}
                        </div>`;
                    }).join('')}
                </div>
            </div>
        `;
    });
    
    reviewContent.innerHTML = html;
    showScreen('review-screen');
}

// Retake Test
function retakeTest() {
    startTest(currentChapter);
}

// Go Home
function goHome() {
    showScreen('home-screen');
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Exit Test
function exitTest() {
    const confirm = window.confirm('Are you sure you want to exit? Your progress will be lost.');
    if (confirm) {
        goHome();
    }
}

// Show Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
