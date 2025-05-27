# DC Circuit Analysis

## Introduction
Direct Current (DC) circuit analysis forms the foundation of electrical engineering, providing essential tools for understanding and designing electronic systems. Unlike time-varying AC circuits, DC circuits maintain constant current direction, simplifying analysis while still offering rich insights into fundamental electrical principles. This document explores the analytical techniques, theorems, and applications of DC circuits, establishing a framework for more advanced electrical studies.

## Basic Circuit Elements and Laws

### Resistors in DC Circuits
Resistors are fundamental passive components that impede current flow according to Ohm's Law. In DC circuits, resistors exhibit constant resistance independent of time, with the voltage-current relationship given by:

![Ohm's Law](/images/electromagnetism/dc-circuits/ohms-law.svg)

$V = IR$

Where V is the voltage across the resistor in volts, I is the current through the resistor in amperes, and R is the resistance in ohms. Resistors dissipate electrical energy as heat, with power dissipation calculated as:

$P = VI = I^2R = \frac{V^2}{R}$

When resistors are connected in series, their equivalent resistance is the sum of individual resistances:

![Series and Parallel Resistors](/images/electromagnetism/dc-circuits/series-parallel-resistors.svg)

$R_{eq} = R_1 + R_2 + ... + R_n$

For parallel connections, the equivalent resistance is calculated as:

$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ... + \frac{1}{R_n}$

For two resistors in parallel, this simplifies to:

$R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$

### Kirchhoff's Laws
Kirchhoff's laws provide the foundation for analyzing complex circuits beyond simple series and parallel combinations.

![Kirchhoff's Laws](/images/electromagnetism/dc-circuits/kirchhoffs-laws.svg)

Kirchhoff's Current Law (KCL) states that the algebraic sum of currents entering and leaving any node in a circuit equals zero:

$\sum_{k=1}^{n} I_k = 0$

Where positive values represent currents entering the node and negative values represent currents leaving the node. This law reflects the conservation of charge.

Kirchhoff's Voltage Law (KVL) states that the algebraic sum of voltages around any closed loop in a circuit equals zero:

$\sum_{k=1}^{n} V_k = 0$

Where voltages are considered positive when traversing from the negative to positive terminal of a source, and negative when traversing from positive to negative. This law reflects the conservation of energy.

### Sources in DC Circuits
DC circuits employ two primary types of sources: voltage sources and current sources.

Voltage sources maintain constant voltage regardless of the current drawn (within operational limits). Ideal voltage sources have zero internal resistance, while practical sources include some internal resistance in series with the ideal source.

Current sources maintain constant current regardless of the voltage across their terminals (within operational limits). Ideal current sources have infinite internal resistance, while practical sources include some internal resistance in parallel with the ideal source.

Source transformations allow conversion between voltage and current sources using the relationships:

$V_{th} = I_{eq} \times R_{th}$
$I_{eq} = \frac{V_{th}}{R_{th}}$

Where $V_{th}$ is the Thévenin equivalent voltage, $I_{eq}$ is the equivalent current source, and $R_{th}$ is the Thévenin equivalent resistance.

## Circuit Analysis Techniques

### Nodal Analysis
Nodal analysis applies Kirchhoff's Current Law to determine unknown node voltages in a circuit. The procedure involves:

![Voltage Divider](/images/electromagnetism/dc-circuits/voltage-divider.svg)

1. Identifying a reference node (ground) with zero potential
2. Assigning variables to unknown node voltages
3. Writing KCL equations at each non-reference node
4. Solving the resulting system of equations

For a circuit with n nodes, nodal analysis typically requires solving n-1 simultaneous equations. This method is particularly efficient for circuits with many voltage sources.

### Mesh Analysis
Mesh analysis applies Kirchhoff's Voltage Law to determine unknown mesh currents in a circuit. The procedure involves:

1. Identifying independent meshes (loops that don't contain other loops)
2. Assigning variables to unknown mesh currents
3. Writing KVL equations for each mesh
4. Solving the resulting system of equations

For a planar circuit with b branches and n nodes, mesh analysis requires solving b-n+1 simultaneous equations. This method is particularly efficient for circuits with many current sources.

### Superposition Principle
The superposition principle states that in linear circuits, the response to multiple sources equals the sum of responses to each source acting independently. To apply this principle:

1. Consider one source at a time, replacing all other voltage sources with short circuits and current sources with open circuits
2. Calculate the circuit response (voltage or current) due to each source independently
3. Sum the individual responses to obtain the total response

This principle applies only to linear circuits where the response is proportional to the excitation.

## Circuit Theorems

### Thévenin's Theorem
Thévenin's theorem states that any linear circuit with voltage and current sources can be replaced by an equivalent circuit consisting of a voltage source $V_{th}$ in series with a resistance $R_{th}$, where:

$V_{th}$ is the open-circuit voltage at the terminals of interest
$R_{th}$ is the equivalent resistance looking back into the circuit with all sources replaced by their internal resistances (voltage sources shorted, current sources opened)

This theorem simplifies analysis of circuits with varying loads by separating the source and load portions.

### Norton's Theorem
Norton's theorem states that any linear circuit with voltage and current sources can be replaced by an equivalent circuit consisting of a current source $I_N$ in parallel with a resistance $R_N$, where:

$I_N$ is the short-circuit current at the terminals of interest
$R_N$ is the equivalent resistance looking back into the circuit with all sources replaced by their internal resistances (voltage sources shorted, current sources opened)

Norton's and Thévenin's equivalent circuits are related by:
$I_N = \frac{V_{th}}{R_{th}}$
$R_N = R_{th}$

### Maximum Power Transfer Theorem
The maximum power transfer theorem states that a source delivers maximum power to a load when the load resistance equals the source's Thévenin equivalent resistance:

$R_L = R_{th}$

Under this condition, the maximum power delivered to the load is:

$P_{max} = \frac{V_{th}^2}{4R_{th}}$

This theorem is crucial for applications requiring maximum power delivery, such as audio amplifiers and communication systems.

## Advanced DC Circuit Concepts

### Non-linear Circuit Elements
While basic DC analysis assumes linear components, many practical circuits include non-linear elements such as diodes, transistors, and certain sensors. For these components, the relationship between voltage and current is not constant, requiring piecewise linear approximation or iterative analysis techniques.

For example, a diode's current-voltage relationship follows the exponential Shockley equation:

$I = I_S(e^{\frac{V}{nV_T}} - 1)$

Where $I_S$ is the saturation current, $V_T$ is the thermal voltage (approximately 26 mV at room temperature), and n is the ideality factor.

### DC Steady State Analysis
Circuits containing energy storage elements (capacitors and inductors) eventually reach DC steady state when subjected to constant sources. In steady state:

Capacitors act as open circuits with zero current flow and constant voltage
Inductors act as short circuits with zero voltage drop and constant current

This behavior simplifies analysis of circuits that have reached equilibrium after transient effects have dissipated.

### DC Power Distribution
DC power distribution systems employ various configurations to deliver power efficiently:

Unipolar systems use two conductors (positive and negative/ground)
Bipolar systems use three conductors (positive, negative, and neutral)

Voltage drop in distribution lines is calculated as:

$V_{drop} = IR = \frac{\rho L}{A}I$

Where ρ is the resistivity of the conductor material, L is the length, A is the cross-sectional area, and I is the current.

Power loss in distribution lines is:

$P_{loss} = I^2R$

This loss increases quadratically with current, explaining why high-voltage transmission is more efficient for long distances.

## Practical Applications and Examples

### Example 1: Resistor Network Analysis
Consider a circuit with a 12V source connected to three resistors: R₁ = 2Ω and R₂ = 3Ω in series, with this combination in parallel with R₃ = 6Ω.

The equivalent resistance of R₁ and R₂ in series is:
$R_{12} = R_1 + R_2 = 2Ω + 3Ω = 5Ω$

The equivalent resistance of R₁₂ in parallel with R₃ is:
$R_{eq} = \frac{R_{12} \times R_3}{R_{12} + R_3} = \frac{5Ω \times 6Ω}{5Ω + 6Ω} = \frac{30Ω}{11Ω} = 2.73Ω$

The total current from the source is:
$I_{total} = \frac{V}{R_{eq}} = \frac{12V}{2.73Ω} = 4.4A$

The current through R₃ is:
$I_3 = \frac{V}{R_3} = \frac{12V}{6Ω} = 2A$

The current through the series combination is:
$I_{12} = I_{total} - I_3 = 4.4A - 2A = 2.4A$

The voltage across R₁ is:
$V_1 = I_{12} \times R_1 = 2.4A \times 2Ω = 4.8V$

The voltage across R₂ is:
$V_2 = I_{12} \times R_2 = 2.4A \times 3Ω = 7.2V$

Verifying KVL: $V_1 + V_2 = 4.8V + 7.2V = 12V$, which equals the source voltage.

### Example 2: Thévenin Equivalent Circuit
For a circuit with a 24V source, R₁ = 4Ω, R₂ = 8Ω, and R₃ = 12Ω, where R₁ is in series with the source, and R₂ and R₃ form a parallel combination connected to R₁, find the Thévenin equivalent with respect to the terminals across R₃.

The open-circuit voltage (Thévenin voltage) is calculated using voltage division:
$V_{th} = 24V \times \frac{R_2}{R_1 + R_2} = 24V \times \frac{8Ω}{4Ω + 8Ω} = 24V \times \frac{2}{3} = 16V$

The Thévenin resistance is found by replacing the voltage source with a short circuit and calculating the equivalent resistance looking back into the circuit from the terminals:
$R_{th} = R_1 || R_2 = \frac{4Ω \times 8Ω}{4Ω + 8Ω} = \frac{32Ω}{12Ω} = 2.67Ω$

The Thévenin equivalent circuit consists of a 16V source in series with a 2.67Ω resistor.

### Example 3: Superposition Analysis
Consider a circuit with two voltage sources: V₁ = 12V and V₂ = 6V, and three resistors: R₁ = 2Ω, R₂ = 4Ω, and R₃ = 6Ω. To find the current through R₃ using superposition:

First, consider only V₁ (replacing V₂ with a short circuit):
$I_{R3,1} = \frac{V_1}{R_1 + (R_2 || R_3)} = \frac{12V}{2Ω + \frac{4Ω \times 6Ω}{4Ω + 6Ω}} = \frac{12V}{2Ω + 2.4Ω} = \frac{12V}{4.4Ω} = 2.73A$

The portion of this current flowing through R₃ is:
$I_{R3,1} = 2.73A \times \frac{R_2}{R_2 + R_3} = 2.73A \times \frac{4Ω}{4Ω + 6Ω} = 2.73A \times 0.4 = 1.09A$

Next, consider only V₂ (replacing V₁ with a short circuit):
$I_{R3,2} = \frac{V_2}{R_3 + (R_1 || R_2)} = \frac{6V}{6Ω + \frac{2Ω \times 4Ω}{2Ω + 4Ω}} = \frac{6V}{6Ω + 1.33Ω} = \frac{6V}{7.33Ω} = 0.82A$

The total current through R₃ by superposition is:
$I_{R3} = I_{R3,1} + I_{R3,2} = 1.09A + 0.82A = 1.91A$

## Computational Methods in DC Analysis

### Matrix Methods
Complex circuits with many nodes or meshes are efficiently solved using matrix methods. For nodal analysis, the system of equations takes the form:

$\mathbf{G} \mathbf{V} = \mathbf{I}$

Where G is the conductance matrix, V is the vector of unknown node voltages, and I is the vector of known current sources.

For mesh analysis, the system is:

$\mathbf{R} \mathbf{I} = \mathbf{V}$

Where R is the resistance matrix, I is the vector of unknown mesh currents, and V is the vector of known voltage sources.

These matrix equations are solved using computational techniques such as Gaussian elimination or LU decomposition.

### Sensitivity Analysis
Sensitivity analysis examines how circuit outputs change with variations in component values, which is crucial for tolerance analysis and design optimization. The sensitivity of a response variable y to a parameter x is defined as:

$S_x^y = \frac{\partial y}{\partial x} \times \frac{x}{y}$

This dimensionless quantity represents the percentage change in y for a 1% change in x.

### Monte Carlo Analysis
Monte Carlo analysis evaluates circuit performance across statistical distributions of component values. The procedure involves:

1. Defining probability distributions for component values
2. Randomly sampling from these distributions
3. Analyzing the circuit for each set of sampled values
4. Compiling statistics on circuit performance

This approach provides insight into yield and reliability under manufacturing variations.

## DC Circuit Applications

### Power Supplies
DC power supplies convert AC mains power to regulated DC voltage using:

1. Transformation (voltage level adjustment)
2. Rectification (AC to pulsating DC conversion)
3. Filtering (smoothing pulsating DC)
4. Regulation (maintaining constant output despite input or load variations)

Linear regulators maintain output voltage by dissipating excess power as heat, while switching regulators use high-frequency switching to transfer energy more efficiently.

### Instrumentation Circuits
DC instrumentation circuits include:

Wheatstone bridges for precise resistance measurement, with output voltage:
$V_{out} = V_{in} \times (\frac{R_1}{R_1 + R_2} - \frac{R_3}{R_3 + R_4})$

Voltage dividers for measurement and reference generation:
$V_{out} = V_{in} \times \frac{R_2}{R_1 + R_2}$

Current shunts for high-current measurement, where a small resistance R_shunt produces a voltage drop proportional to current:
$V_{shunt} = I \times R_{shunt}$

### Control Systems
DC circuits in control systems include:

Operational amplifier configurations for signal conditioning:
- Inverting amplifier: $V_{out} = -\frac{R_f}{R_{in}} \times V_{in}$
- Non-inverting amplifier: $V_{out} = (1 + \frac{R_f}{R_{in}}) \times V_{in}$
- Differential amplifier: $V_{out} = \frac{R_f}{R_{in}} \times (V_2 - V_1)$

Feedback networks for stability and performance optimization, where feedback ratio β determines closed-loop gain:
$A_{cl} = \frac{A_{ol}}{1 + A_{ol} \times \beta}$


## Questions and Answers

### Question 1: Resistor Networks
A circuit contains five resistors: R₁ = 10Ω, R₂ = 15Ω, R₃ = 30Ω, R₄ = 20Ω, and R₅ = 25Ω. Resistors R₁ and R₂ are in parallel, and this combination is in series with R₃. This entire arrangement is in parallel with the series combination of R₄ and R₅. Calculate the equivalent resistance of the entire network.

**Answer:**
First, calculate the equivalent resistance of R₁ and R₂ in parallel:
$R_{12} = \frac{R_1 \times R_2}{R_1 + R_2} = \frac{10Ω \times 15Ω}{10Ω + 15Ω} = \frac{150Ω}{25Ω} = 6Ω$

Next, calculate the series combination of R₁₂ and R₃:
$R_{123} = R_{12} + R_3 = 6Ω + 30Ω = 36Ω$

Calculate the series combination of R₄ and R₅:
$R_{45} = R_4 + R_5 = 20Ω + 25Ω = 45Ω$

Finally, calculate the parallel combination of R₁₂₃ and R₄₅:
$R_{eq} = \frac{R_{123} \times R_{45}}{R_{123} + R_{45}} = \frac{36Ω \times 45Ω}{36Ω + 45Ω} = \frac{1620Ω}{81Ω} = 20Ω$

The equivalent resistance of the entire network is 20Ω.

### Question 2: Kirchhoff's Laws Application
A circuit consists of a 12V battery with internal resistance 0.5Ω, connected to three resistors: R₁ = 4Ω, R₂ = 6Ω, and R₃ = 3Ω. R₁ is in series with the battery, while R₂ and R₃ are in parallel with each other and connected to the series combination of the battery and R₁. Calculate the current through each resistor and the voltage across each component.

**Answer:**
First, calculate the equivalent resistance of R₂ and R₃ in parallel:
$R_{23} = \frac{R_2 \times R_3}{R_2 + R_3} = \frac{6Ω \times 3Ω}{6Ω + 3Ω} = \frac{18Ω}{9Ω} = 2Ω$

The total circuit resistance is:
$R_{total} = R_{internal} + R_1 + R_{23} = 0.5Ω + 4Ω + 2Ω = 6.5Ω$

The total current from the battery is:
$I_{total} = \frac{V}{R_{total}} = \frac{12V}{6.5Ω} = 1.85A$

This current flows through the battery's internal resistance and R₁. The voltage drop across the internal resistance is:
$V_{internal} = I_{total} \times R_{internal} = 1.85A \times 0.5Ω = 0.92V$

The voltage drop across R₁ is:
$V_{R1} = I_{total} \times R_1 = 1.85A \times 4Ω = 7.38V$

The voltage across the parallel combination (and across each of R₂ and R₃) is:
$V_{parallel} = 12V - V_{internal} - V_{R1} = 12V - 0.92V - 7.38V = 3.7V$

The current through R₂ is:
$I_{R2} = \frac{V_{parallel}}{R_2} = \frac{3.7V}{6Ω} = 0.62A$

The current through R₃ is:
$I_{R3} = \frac{V_{parallel}}{R_3} = \frac{3.7V}{3Ω} = 1.23A$

Verifying KCL at the parallel junction: $I_{total} = I_{R2} + I_{R3} = 0.62A + 1.23A = 1.85A$ ✓

### Question 3: Thévenin Equivalent Circuit
For the circuit shown below, find the Thévenin equivalent with respect to terminals A and B:
- 24V voltage source
- R₁ = 12Ω in series with the voltage source
- R₂ = 18Ω connected from the junction of the source and R₁ to terminal A
- R₃ = 36Ω connected from terminal A to terminal B
- Terminal B is connected to the negative terminal of the voltage source

**Answer:**
To find the Thévenin voltage, calculate the open-circuit voltage between terminals A and B:

Using voltage division, the voltage at terminal A with respect to the negative terminal is:
$V_A = 24V \times \frac{R_2}{R_1 + R_2} = 24V \times \frac{18Ω}{12Ω + 18Ω} = 24V \times \frac{18Ω}{30Ω} = 14.4V$

Since terminal B is connected to the negative terminal of the source, $V_B = 0V$.

Therefore, the Thévenin voltage is:
$V_{th} = V_A - V_B = 14.4V - 0V = 14.4V$

To find the Thévenin resistance, replace the voltage source with a short circuit and calculate the equivalent resistance looking into terminals A and B:

With the source shorted, R₁ and R₂ are in parallel, and this combination is in series with R₃:
$R_{12} = \frac{R_1 \times R_2}{R_1 + R_2} = \frac{12Ω \times 18Ω}{12Ω + 18Ω} = \frac{216Ω}{30Ω} = 7.2Ω$

$R_{th} = R_{12} + R_3 = 7.2Ω + 36Ω = 43.2Ω$

The Thévenin equivalent circuit consists of a 14.4V voltage source in series with a 43.2Ω resistor.

### Question 4: Superposition Principle
A circuit contains two voltage sources and three resistors. Source V₁ = 9V with R₁ = 3Ω in series. Source V₂ = 6V with R₂ = 2Ω in series. R₃ = 6Ω connects the positive terminals of both sources. The negative terminals are connected together. Find the current through R₃ using the superposition principle.

**Answer:**
Using superposition, we analyze the effect of each source separately.

First, consider only V₁ (replacing V₂ with a short circuit):
The circuit becomes V₁ in series with R₁, and this combination is in parallel with R₃. R₂ is shorted.

The voltage across R₃ is the same as the voltage across R₁:
$V_{R3,1} = V_1 - I_1 \times R_1$

The current through the circuit is:
$I_1 = \frac{V_1}{R_1 + \frac{R_3 \times R_2}{R_3 + R_2}} = \frac{V_1}{R_1 + \frac{R_3 \times 0}{R_3 + 0}} = \frac{9V}{3Ω} = 3A$

The voltage across R₃ is:
$V_{R3,1} = 9V - 3A \times 3Ω = 9V - 9V = 0V$

Since R₂ is shorted, the voltage across R₃ is 0V, so the current through R₃ due to V₁ is:
$I_{R3,1} = \frac{V_{R3,1}}{R_3} = \frac{0V}{6Ω} = 0A$

Next, consider only V₂ (replacing V₁ with a short circuit):
The circuit becomes V₂ in series with R₂, and this combination is in parallel with R₃. R₁ is shorted.

Using the same approach:
$I_2 = \frac{V_2}{R_2} = \frac{6V}{2Ω} = 3A$

$V_{R3,2} = 6V - 3A \times 2Ω = 6V - 6V = 0V$

$I_{R3,2} = \frac{V_{R3,2}}{R_3} = \frac{0V}{6Ω} = 0A$

The total current through R₃ by superposition is:
$I_{R3} = I_{R3,1} + I_{R3,2} = 0A + 0A = 0A$

This result indicates that no current flows through R₃ in this circuit configuration, which makes sense because both ends of R₃ are at the same potential due to the voltage drops across R₁ and R₂.

### Question 5: Norton Equivalent Circuit
Find the Norton equivalent circuit for the network described in Question 3, with respect to terminals A and B.

**Answer:**
From Question 3, we already know the Thévenin equivalent has:
$V_{th} = 14.4V$
$R_{th} = 43.2Ω$

The Norton equivalent current is:
$I_N = \frac{V_{th}}{R_{th}} = \frac{14.4V}{43.2Ω} = 0.333A$

The Norton equivalent resistance is the same as the Thévenin equivalent resistance:
$R_N = R_{th} = 43.2Ω$

Therefore, the Norton equivalent circuit consists of a 0.333A current source in parallel with a 43.2Ω resistor.

### Question 6: Maximum Power Transfer
For the circuit in Question 3, what load resistance should be connected across terminals A and B to draw maximum power from the network? Calculate this maximum power.

**Answer:**
According to the maximum power transfer theorem, maximum power is transferred to a load when the load resistance equals the Thévenin equivalent resistance of the source network.

From Question 3, we know that $R_{th} = 43.2Ω$. Therefore, the load resistance for maximum power transfer is:
$R_L = R_{th} = 43.2Ω$

The maximum power transferred to this load is:
$P_{max} = \frac{V_{th}^2}{4R_{th}} = \frac{(14.4V)^2}{4 \times 43.2Ω} = \frac{207.36V^2}{172.8Ω} = 1.2W$

This result demonstrates that while maximum power transfer is achieved when $R_L = R_{th}$, the efficiency at this operating point is only 50%, as half the power is dissipated in the source's internal resistance.

### Question 7: Nodal Analysis
A circuit contains three nodes connected by resistors and sources. Node 1 is connected to a 12V source through a 2Ω resistor. Node 2 is connected to a 6V source through a 3Ω resistor. Nodes 1 and 2 are connected by a 4Ω resistor. Node 3 is connected to Node 1 by a 6Ω resistor and to Node 2 by a 5Ω resistor. Node 3 is also connected to ground. Use nodal analysis to find the voltages at Nodes 1 and 2.

**Answer:**
We'll use nodal analysis with Node 3 (ground) as our reference node. Let $V_1$ and $V_2$ be the voltages at Nodes 1 and 2, respectively.

At Node 1, applying KCL (currents leaving the node are positive):
$\frac{V_1 - 12V}{2Ω} + \frac{V_1 - V_2}{4Ω} + \frac{V_1 - 0}{6Ω} = 0$

Multiplying through by 12 (the LCM of the denominators):
$6(V_1 - 12) + 3(V_1 - V_2) + 2V_1 = 0$
$6V_1 - 72 + 3V_1 - 3V_2 + 2V_1 = 0$
$11V_1 - 3V_2 = 72$

At Node 2, applying KCL:
$\frac{V_2 - 6V}{3Ω} + \frac{V_2 - V_1}{4Ω} + \frac{V_2 - 0}{5Ω} = 0$

Multiplying through by 60 (the LCM of the denominators):
$20(V_2 - 6) + 15(V_2 - V_1) + 12V_2 = 0$
$20V_2 - 120 + 15V_2 - 15V_1 + 12V_2 = 0$
$47V_2 - 15V_1 = 120$

We now have two equations with two unknowns:
$11V_1 - 3V_2 = 72$
$-15V_1 + 47V_2 = 120$

Multiplying the first equation by 5:
$55V_1 - 15V_2 = 360$
$-15V_1 + 47V_2 = 120$

Adding these equations:
$40V_1 + 32V_2 = 480$
$32V_2 = 480 - 40V_1$
$V_2 = 15 - 1.25V_1$

Substituting back into the first equation:
$11V_1 - 3(15 - 1.25V_1) = 72$
$11V_1 - 45 + 3.75V_1 = 72$
$14.75V_1 = 117$
$V_1 = 7.93V$

Calculating $V_2$:
$V_2 = 15 - 1.25 \times 7.93 = 15 - 9.91 = 5.09V$

Therefore, $V_1 = 7.93V$ and $V_2 = 5.09V$.

### Question 8: Mesh Analysis
A circuit contains three meshes. Mesh 1 includes a 24V source and resistors R₁ = 4Ω and R₂ = 6Ω. Mesh 2 includes resistors R₂ = 6Ω, R₃ = 8Ω, and R₄ = 10Ω. Mesh 3 includes resistors R₄ = 10Ω, R₅ = 12Ω, and a 12V source. R₁ connects the 24V source's positive terminal to one end of R₂. The other end of R₂ connects to one end of R₃. The other end of R₃ connects to one end of R₄. The other end of R₄ connects to one end of R₅. The other end of R₅ connects to the negative terminal of the 12V source. The negative terminal of the 24V source connects to the positive terminal of the 12V source. Use mesh analysis to find the currents in each mesh.

**Answer:**
Let's define the mesh currents: $I_1$ for Mesh 1, $I_2$ for Mesh 2, and $I_3$ for Mesh 3. We'll follow the convention that clockwise currents are positive.

For Mesh 1, applying KVL:
$24V - I_1 \times 4Ω - (I_1 - I_2) \times 6Ω = 0$
$24 - 4I_1 - 6I_1 + 6I_2 = 0$
$24 - 10I_1 + 6I_2 = 0$
$10I_1 - 6I_2 = 24$

For Mesh 2, applying KVL:
$(I_2 - I_1) \times 6Ω + I_2 \times 8Ω + (I_2 - I_3) \times 10Ω = 0$
$6I_2 - 6I_1 + 8I_2 + 10I_2 - 10I_3 = 0$
$-6I_1 + 24I_2 - 10I_3 = 0$

For Mesh 3, applying KVL:
$(I_3 - I_2) \times 10Ω + I_3 \times 12Ω - 12V = 0$
$10I_3 - 10I_2 + 12I_3 - 12 = 0$
$-10I_2 + 22I_3 = 12$

We now have three equations with three unknowns:
$10I_1 - 6I_2 = 24$
$-6I_1 + 24I_2 - 10I_3 = 0$
$-10I_2 + 22I_3 = 12$

From the third equation:
$I_3 = \frac{12 + 10I_2}{22} = \frac{6 + 5I_2}{11}$

Substituting into the second equation:
$-6I_1 + 24I_2 - 10(\frac{6 + 5I_2}{11}) = 0$
$-6I_1 + 24I_2 - \frac{60 + 50I_2}{11} = 0$
$-66I_1 + 264I_2 - 60 - 50I_2 = 0$
$-66I_1 + 214I_2 = 60$
$-33I_1 + 107I_2 = 30$

From the first equation:
$I_1 = \frac{24 + 6I_2}{10} = 2.4 + 0.6I_2$

Substituting into the equation above:
$-33(2.4 + 0.6I_2) + 107I_2 = 30$
$-79.2 - 19.8I_2 + 107I_2 = 30$
$87.2I_2 = 109.2$
$I_2 = 1.25A$

Calculating $I_1$:
$I_1 = 2.4 + 0.6 \times 1.25 = 2.4 + 0.75 = 3.15A$

Calculating $I_3$:
$I_3 = \frac{6 + 5 \times 1.25}{11} = \frac{6 + 6.25}{11} = \frac{12.25}{11} = 1.11A$

Therefore, $I_1 = 3.15A$, $I_2 = 1.25A$, and $I_3 = 1.11A$.

### Question 9: Non-linear Circuit Elements
A circuit contains a diode in series with a 1kΩ resistor and a 5V source. The diode can be modeled using the Shockley equation with a saturation current $I_S = 10^{-12}A$ and an ideality factor $n = 1$. Estimate the voltage across the diode and the current through the circuit at room temperature (25°C, where $V_T = 25.7mV$).

**Answer:**
The Shockley equation for a diode is:
$I = I_S(e^{\frac{V_D}{nV_T}} - 1)$

Where $I$ is the current through the diode, $I_S$ is the saturation current, $V_D$ is the voltage across the diode, $n$ is the ideality factor, and $V_T$ is the thermal voltage.

In this circuit, the same current flows through the diode and resistor. Using Kirchhoff's Voltage Law:
$5V = V_D + I \times 1kΩ$

Substituting the Shockley equation:
$5V = V_D + I_S(e^{\frac{V_D}{nV_T}} - 1) \times 1kΩ$
$5V = V_D + 10^{-12}(e^{\frac{V_D}{25.7mV}} - 1) \times 1000Ω$

This equation is transcendental and requires numerical methods or iteration to solve. However, we can make an approximation. For silicon diodes at room temperature, the forward voltage is typically around 0.7V when conducting significant current.

Let's verify if $V_D = 0.7V$ is a reasonable approximation:
$I = 10^{-12}(e^{\frac{0.7V}{25.7mV}} - 1) = 10^{-12}(e^{27.24} - 1) \approx 10^{-12} \times 6.8 \times 10^{11} = 0.68mA$

The voltage across the resistor would be:
$V_R = I \times R = 0.68mA \times 1kΩ = 0.68V$

The sum of the voltage drops is:
$V_D + V_R = 0.7V + 0.68V = 1.38V$

This is less than the source voltage of 5V, indicating our approximation is too low. Let's try $V_D = 0.75V$:
$I = 10^{-12}(e^{\frac{0.75V}{25.7mV}} - 1) \approx 10^{-12} \times 2.9 \times 10^{12} = 2.9mA$

$V_R = 2.9mA \times 1kΩ = 2.9V$

$V_D + V_R = 0.75V + 2.9V = 3.65V$

Still less than 5V. Let's try $V_D = 0.8V$:
$I = 10^{-12}(e^{\frac{0.8V}{25.7mV}} - 1) \approx 10^{-12} \times 1.26 \times 10^{13} = 12.6mA$

$V_R = 12.6mA \times 1kΩ = 12.6V$

This exceeds the source voltage, so our approximation is too high. Through further iteration, we find that $V_D \approx 0.76V$ gives a current of approximately $4.2mA$ and a resistor voltage drop of $4.2V$, which sums to approximately $5V$.

Therefore, the voltage across the diode is approximately $0.76V$, and the current through the circuit is approximately $4.2mA$.

### Question 10: DC Steady State in Circuits with Capacitors and Inductors
A circuit contains a 10V source, a 2kΩ resistor, a 5kΩ resistor, and a 10μF capacitor. The capacitor is initially uncharged. The 2kΩ resistor is in series with the source, and this combination is in parallel with the series combination of the 5kΩ resistor and the capacitor. Determine the steady-state voltage across the capacitor and the current through each component.

**Answer:**
In DC steady state, capacitors act as open circuits. This means that no current will flow through the branch containing the 5kΩ resistor and the capacitor.

The steady-state voltage across the capacitor will equal the voltage across the parallel combination, which is the source voltage minus the voltage drop across the 2kΩ resistor. Since no current flows through the 5kΩ resistor and capacitor branch in steady state, all the source current flows through the 2kΩ resistor.

The current through the 2kΩ resistor is:
$I_{2kΩ} = \frac{10V}{2kΩ} = 5mA$

The voltage drop across the 2kΩ resistor is:
$V_{2kΩ} = I_{2kΩ} \times 2kΩ = 5mA \times 2kΩ = 10V$

The voltage across the parallel combination (and thus across the capacitor) is:
$V_C = 10V - 10V = 0V$

In steady state:
- Capacitor voltage: $V_C = 0V$
- Current through 2kΩ resistor: $I_{2kΩ} = 5mA$
- Current through 5kΩ resistor and capacitor: $I_{5kΩ} = I_C = 0mA$

This makes sense because the capacitor and 5kΩ resistor form a series path in parallel with the 2kΩ resistor. Since the capacitor blocks DC current in steady state, all current flows through the 2kΩ path, creating a voltage drop equal to the source voltage.

### Question 11: DC Power Distribution
A DC power distribution system operates at 48V and supplies power to three loads: Load A (100W), Load B (250W), and Load C (150W). The loads are connected to the source through copper conductors with resistivity $\rho = 1.68 \times 10^{-8} \Omega\cdot m$. The conductor to Load A is 15m long with cross-sectional area $2.5mm^2$. The conductor to Load B is 25m long with cross-sectional area $4mm^2$. The conductor to Load C is 20m long with cross-sectional area $2.5mm^2$. Calculate the voltage at each load, the power loss in each conductor, and the overall efficiency of the distribution system.

**Answer:**
First, we calculate the current drawn by each load at the nominal voltage:
$I_A = \frac{P_A}{V_{nominal}} = \frac{100W}{48V} = 2.08A$
$I_B = \frac{P_B}{V_{nominal}} = \frac{250W}{48V} = 5.21A$
$I_C = \frac{P_C}{V_{nominal}} = \frac{150W}{48V} = 3.13A$

Next, we calculate the resistance of each conductor using $R = \frac{\rho L}{A}$:
$R_A = \frac{1.68 \times 10^{-8} \Omega\cdot m \times 15m}{2.5 \times 10^{-6}m^2} = 0.101\Omega$
$R_B = \frac{1.68 \times 10^{-8} \Omega\cdot m \times 25m}{4 \times 10^{-6}m^2} = 0.105\Omega$
$R_C = \frac{1.68 \times 10^{-8} \Omega\cdot m \times 20m}{2.5 \times 10^{-6}m^2} = 0.134\Omega$

The voltage drop in each conductor is:
$V_{drop,A} = I_A \times R_A = 2.08A \times 0.101\Omega = 0.21V$
$V_{drop,B} = I_B \times R_B = 5.21A \times 0.105\Omega = 0.55V$
$V_{drop,C} = I_C \times R_C = 3.13A \times 0.134\Omega = 0.42V$

The voltage at each load is:
$V_A = 48V - V_{drop,A} = 48V - 0.21V = 47.79V$
$V_B = 48V - V_{drop,B} = 48V - 0.55V = 47.45V$
$V_C = 48V - V_{drop,C} = 48V - 0.42V = 47.58V$

The actual power delivered to each load is:
$P_{A,actual} = V_A \times I_A = 47.79V \times 2.08A = 99.4W$
$P_{B,actual} = V_B \times I_B = 47.45V \times 5.21A = 247.2W$
$P_{C,actual} = V_C \times I_C = 47.58V \times 3.13A = 148.9W$

The power loss in each conductor is:
$P_{loss,A} = I_A^2 \times R_A = (2.08A)^2 \times 0.101\Omega = 0.44W$
$P_{loss,B} = I_B^2 \times R_B = (5.21A)^2 \times 0.105\Omega = 2.85W$
$P_{loss,C} = I_C^2 \times R_C = (3.13A)^2 \times 0.134\Omega = 1.31W$

The total power supplied by the source is:
$P_{total} = P_{A,actual} + P_{B,actual} + P_{C,actual} + P_{loss,A} + P_{loss,B} + P_{loss,C}$
$P_{total} = 99.4W + 247.2W + 148.9W + 0.44W + 2.85W + 1.31W = 500.1W$

The overall efficiency of the distribution system is:
$\eta = \frac{P_{A,actual} + P_{B,actual} + P_{C,actual}}{P_{total}} \times 100\%$
$\eta = \frac{99.4W + 247.2W + 148.9W}{500.1W} \times 100\% = \frac{495.5W}{500.1W} \times 100\% = 99.1\%$

This high efficiency is typical for DC distribution systems operating at relatively high voltages with appropriate conductor sizing.

### Question 12: Wheatstone Bridge
A Wheatstone bridge circuit is used to measure an unknown resistance $R_x$. The bridge consists of a 10V DC source, a galvanometer with 100\Omega internal resistance, and four resistors arranged in a diamond pattern. The known resistors are $R_1 = 1k\Omega$, $R_2 = 2k\Omega$, and $R_3 = 1.5k\Omega$. When the bridge is balanced (no current through the galvanometer), what is the value of $R_x$? If $R_x$ changes by 1%, what current will flow through the galvanometer?

**Answer:**
In a Wheatstone bridge, balance occurs when:
$\frac{R_1}{R_2} = \frac{R_3}{R_x}$

Rearranging to solve for $R_x$:
$R_x = \frac{R_2 \times R_3}{R_1} = \frac{2k\Omega \times 1.5k\Omega}{1k\Omega} = \frac{3000k\Omega^2}{1k\Omega} = 3k\Omega$

If $R_x$ changes by 1% to $3.03k\Omega$, the bridge becomes unbalanced. To calculate the current through the galvanometer, we need to analyze the circuit using Thévenin's theorem.

First, we find the Thévenin voltage by removing the galvanometer. The voltage at the junction of $R_1$ and $R_3$ is:
$V_1 = 10V \times \frac{R_1}{R_1 + R_2} = 10V \times \frac{1k\Omega}{1k\Omega + 2k\Omega} = 10V \times \frac{1}{3} = 3.33V$

The voltage at the junction of $R_2$ and $R_x$ is:
$V_2 = 10V \times \frac{R_x}{R_3 + R_x} = 10V \times \frac{3.03k\Omega}{1.5k\Omega + 3.03k\Omega} = 10V \times \frac{3.03}{4.53} = 6.69V$

The Thévenin voltage is:
$V_{th} = V_2 - V_1 = 6.69V - 3.33V = 3.36V$

Next, we find the Thévenin resistance by replacing the voltage source with a short circuit. The resistance looking into the junction of $R_1$ and $R_3$ is:
$R_{th1} = R_1 || R_2 = \frac{R_1 \times R_2}{R_1 + R_2} = \frac{1k\Omega \times 2k\Omega}{1k\Omega + 2k\Omega} = \frac{2000k\Omega^2}{3k\Omega} = 0.67k\Omega$

The resistance looking into the junction of $R_2$ and $R_x$ is:
$R_{th2} = R_3 || R_x = \frac{R_3 \times R_x}{R_3 + R_x} = \frac{1.5k\Omega \times 3.03k\Omega}{1.5k\Omega + 3.03k\Omega} = \frac{4545k\Omega^2}{4.53k\Omega} = 1.003k\Omega$

The Thévenin resistance is:
$R_{th} = R_{th1} + R_{th2} = 0.67k\Omega + 1.003k\Omega = 1.673k\Omega$

The current through the galvanometer is:
$I_g = \frac{V_{th}}{R_{th} + R_g} = \frac{3.36V}{1.673k\Omega + 0.1k\Omega} = \frac{3.36V}{1.773k\Omega} = 1.89mA$

Therefore, a 1% change in $R_x$ results in a current of 1.89mA through the galvanometer.

### Question 13: Operational Amplifier Circuit
An operational amplifier is configured as a non-inverting amplifier with a feedback resistor $R_f = 47k\Omega$ and an input resistor $R_{in} = 4.7k\Omega$. The op-amp is powered by a ±15V dual supply. If the input voltage is a 0.5V DC signal, calculate the output voltage, the voltage gain, and the power dissipated in the feedback resistor.

**Answer:**
For a non-inverting amplifier, the voltage gain is:
$A_v = 1 + \frac{R_f}{R_{in}} = 1 + \frac{47k\Omega}{4.7k\Omega} = 1 + 10 = 11$

The output voltage is:
$V_{out} = A_v \times V_{in} = 11 \times 0.5V = 5.5V$

This output voltage is within the op-amp's supply range of ±15V, so the op-amp operates in its linear region.

The current through the feedback resistor is:
$I_f = \frac{V_{out} - V_{in}}{R_f} = \frac{5.5V - 0.5V}{47k\Omega} = \frac{5V}{47k\Omega} = 0.106mA$

The power dissipated in the feedback resistor is:
$P_f = I_f^2 \times R_f = (0.106mA)^2 \times 47k\Omega = (0.106 \times 10^{-3})^2 \times 47 \times 10^3 = 0.53mW$

Therefore, the voltage gain is 11, the output voltage is 5.5V, and the power dissipated in the feedback resistor is 0.53mW.

### Question 14: Source Transformation
A circuit contains a 24V voltage source with a 6\Omega internal resistance in series. Transform this to an equivalent current source. Then, calculate the current delivered to a 12\Omega load resistor connected across the terminals of either source.

**Answer:**
To transform a voltage source with internal resistance to an equivalent current source:
$I_{eq} = \frac{V_{source}}{R_{internal}} = \frac{24V}{6\Omega} = 4A$

The internal resistance remains the same: $R_{internal} = 6\Omega$

So the equivalent current source is a 4A source with a 6\Omega resistor in parallel.

To calculate the current delivered to a 12\Omega load:

Using the voltage source model:
The total circuit resistance is $R_{total} = R_{internal} + R_{load} = 6\Omega + 12\Omega = 18\Omega$
The current is $I = \frac{V_{source}}{R_{total}} = \frac{24V}{18\Omega} = 1.33A$

Using the current source model:
The current divides between the internal resistance and the load resistance according to the current division principle:
$I_{load} = I_{eq} \times \frac{R_{internal}}{R_{internal} + R_{load}} = 4A \times \frac{6\Omega}{6\Omega + 12\Omega} = 4A \times \frac{6\Omega}{18\Omega} = 4A \times \frac{1}{3} = 1.33A$

Both models yield the same result: 1.33A flows through the 12\Omega load resistor.

### Question 15: Matrix Methods for Circuit Analysis
A circuit has three nodes (with Node 3 as the reference) and is described by the following nodal equations:
$4V_1 - V_2 = 10$
$-V_1 + 5V_2 = 15$

Solve this system using matrix methods to find the node voltages $V_1$ and $V_2$. Then calculate the current flowing from Node 1 to Node 2 if they are connected by a 2\Omega resistor.

**Answer:**
The nodal equations can be written in matrix form as:
$\begin{bmatrix} 4 & -1 \\ -1 & 5 \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} 10 \\ 15 \end{bmatrix}$

To solve this system, we can find the inverse of the coefficient matrix and multiply it by the right-hand side vector:
$\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} 4 & -1 \\ -1 & 5 \end{bmatrix}^{-1} \begin{bmatrix} 10 \\ 15 \end{bmatrix}$

The determinant of the coefficient matrix is:
$det = 4 \times 5 - (-1) \times (-1) = 20 - 1 = 19$

The inverse matrix is:
$\begin{bmatrix} 4 & -1 \\ -1 & 5 \end{bmatrix}^{-1} = \frac{1}{19} \begin{bmatrix} 5 & 1 \\ 1 & 4 \end{bmatrix}$

Multiplying the inverse matrix by the right-hand side vector:
$\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \frac{1}{19} \begin{bmatrix} 5 & 1 \\ 1 & 4 \end{bmatrix} \begin{bmatrix} 10 \\ 15 \end{bmatrix} = \frac{1}{19} \begin{bmatrix} 5 \times 10 + 1 \times 15 \\ 1 \times 10 + 4 \times 15 \end{bmatrix} = \frac{1}{19} \begin{bmatrix} 65 \\ 70 \end{bmatrix}$

$V_1 = \frac{65}{19} = 3.42V$
$V_2 = \frac{70}{19} = 3.68V$

The current flowing from Node 1 to Node 2 through the 2\Omega resistor is:
$I_{1\to2} = \frac{V_1 - V_2}{2\Omega} = \frac{3.42V - 3.68V}{2\Omega} = \frac{-0.26V}{2\Omega} = -0.13A$

The negative sign indicates that the current actually flows from Node 2 to Node 1, with a magnitude of 0.13A.

## Summary
DC circuit analysis provides essential tools for understanding electrical systems under constant voltage and current conditions. From basic principles like Ohm's Law and Kirchhoff's Laws to advanced techniques like Thévenin equivalents and superposition, these analytical methods form the foundation for electrical engineering. While this document focuses on steady-state DC behavior, the principles extend to transient analysis, AC circuits, and more complex electronic systems. Mastery of DC analysis enables engineers to design efficient, reliable electrical systems across diverse applications from power distribution to precision instrumentation and control systems.