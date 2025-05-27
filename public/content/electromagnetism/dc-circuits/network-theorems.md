# Network Theorems in DC Circuits

## Introduction

Network theorems provide powerful analytical tools for simplifying and solving complex electrical circuits. These theorems transform intricate circuit configurations into equivalent, more manageable forms without altering the circuit's external behavior. For electrical engineering students, mastering these theorems is essential as they form the foundation for analyzing both DC and AC circuits across various applications. This document examines the key network theorems applicable to DC circuits, their mathematical formulations, and practical applications.

## Superposition Theorem

### Principle and Formulation

![Superposition Theorem](/images/electromagnetism/dc-circuits/superposition-theorem.svg)

The superposition theorem states that in a linear circuit with multiple sources, the response (voltage or current) at any element equals the algebraic sum of the responses caused by each source acting independently. To apply this theorem:

1. Consider one source at a time, replacing all other voltage sources with short circuits and current sources with open circuits
2. Calculate the circuit response due to each source independently
3. Sum the individual responses to obtain the total response

Mathematically, for a circuit with n sources, the voltage across or current through any element is:

$V_{total} = V_1 + V_2 + ... + V_n$
$I_{total} = I_1 + I_2 + ... + I_n$

Where $V_i$ and $I_i$ represent the voltage or current due to the ith source acting alone.

### Limitations and Applications

The superposition theorem applies only to linear circuits where the response is proportional to the excitation. It cannot be applied to circuits with non-linear elements such as diodes or to calculate power, which varies as the square of voltage or current. Despite these limitations, the theorem is particularly valuable for analyzing circuits with multiple sources, especially when the sources have different frequencies in AC analysis.

### Example Application

Consider a circuit with two voltage sources: 12V and 6V, connected to three resistors: R₁ = 2Ω, R₂ = 4Ω, and R₃ = 6Ω. To find the current through R₃ using superposition:

First, consider only the 12V source (replacing the 6V source with a short circuit):
- Calculate the current through R₃ due to this source: I₃₁ = 1.2A

Next, consider only the 6V source (replacing the 12V source with a short circuit):
- Calculate the current through R₃ due to this source: I₃₂ = 0.8A

The total current through R₃ is the algebraic sum:
I₃ = I₃₁ + I₃₂ = 1.2A + 0.8A = 2.0A

This approach significantly simplifies the analysis of complex multi-source circuits.

## Thévenin's Theorem

### Principle and Formulation

![Thévenin and Norton Equivalent Circuits](/images/electromagnetism/dc-circuits/thevenin-norton-theorem.svg)

Thévenin's theorem states that any linear circuit with voltage and current sources can be replaced by an equivalent circuit consisting of a voltage source in series with a resistance. This equivalent circuit, from the perspective of a specific pair of terminals, behaves identically to the original circuit.

The Thévenin equivalent circuit consists of:
- Thévenin voltage (Vₜₕ): The open-circuit voltage at the terminals of interest
- Thévenin resistance (Rₜₕ): The equivalent resistance looking back into the circuit with all sources replaced by their internal resistances (voltage sources shorted, current sources opened)

### Determination of Thévenin Parameters

To find the Thévenin equivalent:

1. Identify the terminals (A-B) across which the equivalent circuit is to be determined
2. Calculate the open-circuit voltage (Vₜₕ) across terminals A-B
3. Calculate the Thévenin resistance (Rₜₕ) by:
   - Deactivating all independent sources (replacing voltage sources with short circuits and current sources with open circuits)
   - Calculating the equivalent resistance looking back into the circuit from terminals A-B
   - Alternatively, Rₜₕ can be found by dividing the open-circuit voltage by the short-circuit current: Rₜₕ = Vₜₕ/Iₛc

### Applications and Advantages

Thévenin's theorem is particularly useful for:
- Analyzing circuits with varying loads, as only the load needs to be reconnected to the Thévenin equivalent
- Simplifying complex networks for easier analysis
- Studying the behavior of a circuit when a specific component changes
- Analyzing maximum power transfer conditions

### Example Application

Consider a circuit with a 24V source, R₁ = 4Ω in series with the source, and R₂ = 8Ω in parallel with this combination. To find the Thévenin equivalent with respect to the terminals across R₂:

The open-circuit voltage (Thévenin voltage) is:
Vₜₕ = 24V × (R₂/(R₁+R₂)) = 24V × (8Ω/(4Ω+8Ω)) = 16V

The Thévenin resistance is found by deactivating the voltage source and calculating the equivalent resistance looking back into the circuit:
Rₜₕ = R₁ = 4Ω

Therefore, the Thévenin equivalent consists of a 16V source in series with a 4Ω resistor.

## Norton's Theorem

### Principle and Formulation

Norton's theorem is the dual of Thévenin's theorem and states that any linear circuit can be replaced by an equivalent circuit consisting of a current source in parallel with a resistance. This Norton equivalent, from the perspective of a specific pair of terminals, behaves identically to the original circuit.

The Norton equivalent circuit consists of:
- Norton current (Iₙ): The short-circuit current flowing through the terminals of interest
- Norton resistance (Rₙ): The equivalent resistance looking back into the circuit with all sources replaced by their internal resistances (identical to Thévenin resistance)

### Determination of Norton Parameters

To find the Norton equivalent:

1. Identify the terminals (A-B) across which the equivalent circuit is to be determined
2. Calculate the short-circuit current (Iₙ) flowing through a short circuit placed across terminals A-B
3. Calculate the Norton resistance (Rₙ) using the same method as for Thévenin resistance

Alternatively, if the Thévenin equivalent is known, the Norton parameters can be calculated using:
Iₙ = Vₜₕ/Rₜₕ
Rₙ = Rₜₕ

### Applications and Advantages

Norton's theorem is particularly useful for:
- Circuits with multiple parallel branches
- Analyzing current divider configurations
- Circuits where the load is primarily current-dependent
- Situations where the short-circuit current is easier to calculate than the open-circuit voltage

### Example Application

Using the same circuit from the Thévenin example, the Norton equivalent would have:

Norton current:
Iₙ = Vₜₕ/Rₜₕ = 16V/4Ω = 4A

Norton resistance:
Rₙ = Rₜₕ = 4Ω

Therefore, the Norton equivalent consists of a 4A current source in parallel with a 4Ω resistor.

## Maximum Power Transfer Theorem

### Principle and Formulation

![Maximum Power Transfer Theorem](/images/electromagnetism/dc-circuits/maximum-power-transfer.svg)

The maximum power transfer theorem states that a source delivers maximum power to a load when the load resistance equals the source's Thévenin equivalent resistance:

$R_L = R_{th}$

Under this condition, the maximum power delivered to the load is:

$P_{max} = \frac{V_{th}^2}{4R_{th}}$

This theorem applies to both DC and AC circuits, though in AC circuits, maximum power transfer occurs when the load impedance is the complex conjugate of the source impedance.

### Efficiency Considerations

While maximum power transfer provides the highest possible power to the load, it operates at only 50% efficiency, as half the power is dissipated in the source's internal resistance. In power transmission applications, efficiency is typically prioritized over maximum power transfer, leading to different design criteria.

### Example Application

For a circuit with Thévenin parameters Vₜₕ = 12V and Rₜₕ = 3Ω, the load resistance for maximum power transfer is:
R₁ = Rₜₕ = 3Ω

The maximum power delivered to this load is:
Pₘₐₓ = Vₜₕ²/(4×Rₜₕ) = (12V)²/(4×3Ω) = 144V²/12Ω = 12W

## Source Transformation

### Principle and Formulation

Source transformation allows conversion between Thévenin and Norton equivalent circuits, providing flexibility in circuit analysis. The transformations are:

From Thévenin to Norton:
- Norton current: Iₙ = Vₜₕ/Rₜₕ
- Norton resistance: Rₙ = Rₜₕ

From Norton to Thévenin:
- Thévenin voltage: Vₜₕ = Iₙ×Rₙ
- Thévenin resistance: Rₜₕ = Rₙ

These transformations preserve the terminal characteristics of the circuit, allowing analysts to choose the most convenient representation for a particular problem.

### Applications

Source transformation is particularly useful for:
- Simplifying circuits with mixed source types
- Converting series-connected components to parallel configurations or vice versa
- Analyzing complex networks through sequential transformations
- Facilitating the application of other network theorems

### Example Application

A circuit contains a 5A current source in parallel with a 10Ω resistor. The equivalent Thévenin circuit would have:

Thévenin voltage:
Vₜₕ = Iₙ×Rₙ = 5A×10Ω = 50V

Thévenin resistance:
Rₜₕ = Rₙ = 10Ω

Therefore, the Thévenin equivalent consists of a 50V voltage source in series with a 10Ω resistor.

## Millman's Theorem

### Principle and Formulation

Millman's theorem provides a method for determining the voltage across a set of parallel branches, each containing a voltage source in series with a resistance. The common voltage across these parallel branches is:

$V = \frac{\sum_{i=1}^{n} \frac{V_i}{R_i}}{\sum_{i=1}^{n} \frac{1}{R_i}}$

Where Vᵢ is the voltage of the ith source and Rᵢ is the resistance in series with that source.

For branches containing current sources, the numerator term becomes simply the current value (with appropriate sign).

### Applications

Millman's theorem is particularly useful for:
- Circuits with multiple voltage sources in parallel branches
- Mixed circuits with both voltage and current sources in parallel
- Simplifying complex parallel configurations
- Determining node voltages in circuits with multiple sources

### Example Application

Consider three parallel branches: Branch 1 with a 12V source in series with 4Ω, Branch 2 with a 9V source in series with 3Ω, and Branch 3 with a 6V source in series with 2Ω. The common voltage across these branches is:

V = [(12V/4Ω) + (9V/3Ω) + (6V/2Ω)] / [(1/4Ω) + (1/3Ω) + (1/2Ω)]
V = [3A + 3A + 3A] / [0.25S + 0.33S + 0.5S]
V = 9A / 1.08S
V = 8.33V

## Reciprocity Theorem

### Principle and Formulation

The reciprocity theorem states that in a linear, bilateral network, if a voltage source in one branch produces a current in another branch, then the same voltage source, if placed in the second branch, will produce the same current in the first branch.

Mathematically, if a voltage source V in branch 1 produces current I in branch 2, then the same voltage source V in branch 2 will produce current I in branch 1:

$\frac{I_2}{V_1} = \frac{I_1}{V_2}$

### Limitations and Applications

The reciprocity theorem applies only to linear, bilateral networks (networks containing only resistors, capacitors, and inductors). It does not apply to networks containing non-linear or non-reciprocal elements such as transistors or transformers with magnetic cores.

This theorem is particularly useful for:
- Analyzing complex networks with multiple sources and loads
- Antenna theory and electromagnetic field analysis
- Understanding mutual inductance and transformer behavior
- Simplifying the analysis of certain types of networks

### Example Application

In a circuit where a 10V source in branch A produces a 2A current in branch B, the reciprocity theorem guarantees that placing the 10V source in branch B would produce a 2A current in branch A. This property can significantly simplify the analysis of complex networks by allowing the interchange of source and measurement locations.

## Compensation Theorem

### Principle and Formulation

The compensation theorem states that if a resistance R in a branch of a network is changed to R + ΔR, the resulting change in current in any branch can be calculated by introducing a voltage source of value I×ΔR in place of the resistance change, where I is the original current through the resistance.

This theorem allows analysis of the effect of component variations without recalculating the entire circuit.

### Applications

The compensation theorem is particularly useful for:
- Sensitivity analysis of circuits to component variations
- Troubleshooting and fault analysis
- Design optimization where component values may change
- Understanding the impact of component tolerances on circuit performance

### Example Application

In a circuit where a 100Ω resistor carries 0.1A, if the resistance changes to 110Ω (ΔR = 10Ω), the effect on the circuit can be analyzed by replacing the 10Ω change with a voltage source of value I×ΔR = 0.1A×10Ω = 1V. This voltage source, with appropriate polarity, allows calculation of the current changes throughout the circuit without resolving the entire network.

## Tellegen's Theorem

### Principle and Formulation

Tellegen's theorem is a fundamental conservation law in circuit theory, stating that the sum of all power in a network is zero, including both delivered and absorbed power:

$\sum_{k=1}^{n} V_k I_k = 0$

Where Vₖ is the voltage across element k and Iₖ is the current through element k, with appropriate sign conventions.

This theorem is a direct consequence of Kirchhoff's laws and applies to any network, regardless of its linearity, time-variance, or reciprocity.

### Applications

Tellegen's theorem is particularly useful for:
- Verifying the consistency of circuit solutions
- Deriving other network theorems
- Analyzing power flow in complex networks
- Developing energy-based circuit analysis methods

### Example Application

In a circuit with three elements where element 1 delivers 10W, element 2 absorbs 6W, and element 3 absorbs 4W, Tellegen's theorem verifies that the total power is zero: 10W - 6W - 4W = 0. This conservation principle provides a powerful check on the validity of circuit solutions and forms the basis for energy-based analysis methods.

## Y-Δ (Star-Delta) Transformation

### Principle and Formulation

![Y-Δ (Star-Delta) Transformation](/images/electromagnetism/dc-circuits/y-delta-transformation.svg)

The Y-Δ (Star-Delta) transformation allows conversion between two equivalent three-terminal networks: a Y (or star) configuration and a Δ (or delta) configuration. This transformation is valuable when direct analysis of a network is difficult due to its topology.

The transformation equations are:

From Y to Δ:
$R_{AB} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_C}$
$R_{BC} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_A}$
$R_{CA} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_B}$

From Δ to Y:
$R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$
$R_B = \frac{R_{AB} R_{BC}}{R_{AB} + R_{BC} + R_{CA}}$
$R_C = \frac{R_{BC} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$

Where R₍ₐₑ₎ represents the resistance between terminals A and B in the Δ configuration, and R₍ₐ₎ represents the resistance from terminal A to the central node in the Y configuration.

### Applications

Y-Δ transformation is particularly useful for:
- Simplifying complex bridge circuits
- Analyzing three-phase power systems
- Solving networks with complex interconnections
- Transforming networks to more analyzable forms

### Example Application

Consider a Y network with resistances R₍ₐ₎ = 3Ω, R₍ₑ₎ = 4Ω, and R₍c₎ = 5Ω. The equivalent Δ network would have:

R₍ₐₑ₎ = (3Ω×4Ω + 4Ω×5Ω + 5Ω×3Ω)/5Ω = (12 + 20 + 15)/5 = 47/5 = 9.4Ω
R₍ₑc₎ = (3Ω×4Ω + 4Ω×5Ω + 5Ω×3Ω)/3Ω = 47/3 = 15.67Ω
R₍cₐ₎ = (3Ω×4Ω + 4Ω×5Ω + 5Ω×3Ω)/4Ω = 47/4 = 11.75Ω

This transformation allows analysis of the circuit in whichever configuration is more convenient.

## Questions and Answers

### Question 1: Superposition Theorem
A circuit contains two voltage sources: 12V and 6V, and three resistors: R₁ = 3Ω, R₂ = 6Ω, and R₃ = 9Ω. The 12V source is in series with R₁, and the 6V source is in series with R₂. These two branches are in parallel, and R₃ is connected across the open terminals. Calculate the current through R₃ using the superposition theorem.

**Answer:**
First, consider only the 12V source (replacing the 6V source with a short circuit):
The equivalent resistance seen by the 12V source is R₁ + (R₂||R₃) = 3Ω + (6Ω×9Ω)/(6Ω+9Ω) = 3Ω + 3.6Ω = 6.6Ω
The current through the 12V source is I₁ = 12V/6.6Ω = 1.82A
The voltage across R₂||R₃ is V₁ = I₁×3Ω = 1.82A×3Ω = 5.46V
The current through R₃ due to the 12V source is I₃₁ = V₁/R₃ = 5.46V/9Ω = 0.61A

Next, consider only the 6V source (replacing the 12V source with a short circuit):
The equivalent resistance seen by the 6V source is R₂ + (R₁||R₃) = 6Ω + (3Ω×9Ω)/(3Ω+9Ω) = 6Ω + 2.25Ω = 8.25Ω
The current through the 6V source is I₂ = 6V/8.25Ω = 0.73A
The voltage across R₁||R₃ is V₂ = I₂×6Ω = 0.73A×6Ω = 4.38V
The current through R₃ due to the 6V source is I₃₂ = V₂/R₃ = 4.38V/9Ω = 0.49A

The total current through R₃ by superposition is I₃ = I₃₁ + I₃₂ = 0.61A + 0.49A = 1.1A

### Question 2: Thévenin's Theorem
Find the Thévenin equivalent circuit with respect to terminals A-B for a network containing a 24V source with internal resistance 2Ω, connected in series with a 6Ω resistor. A 12Ω resistor is connected in parallel with the 6Ω resistor. Terminals A-B are across the 12Ω resistor.

**Answer:**
The open-circuit voltage (Thévenin voltage) across terminals A-B is the voltage across the 12Ω resistor:
Using voltage division: Vₜₕ = 24V × 12Ω/(6Ω+12Ω) = 24V × 12Ω/18Ω = 24V × 2/3 = 16V

To find the Thévenin resistance, deactivate the voltage source (replace it with a short circuit) and calculate the equivalent resistance looking back into the circuit from terminals A-B:
Rₜₕ = 2Ω + (6Ω×12Ω)/(6Ω+12Ω) = 2Ω + 72Ω/18Ω = 2Ω + 4Ω = 6Ω

Therefore, the Thévenin equivalent circuit consists of a 16V voltage source in series with a 6Ω resistor.

### Question 3: Maximum Power Transfer
Using the Thévenin equivalent circuit from Question 2, determine the load resistance that should be connected across terminals A-B for maximum power transfer. Calculate this maximum power.

**Answer:**
According to the maximum power transfer theorem, maximum power is transferred when the load resistance equals the Thévenin resistance:
R₁ = Rₜₕ = 6Ω

The maximum power transferred to this load is:
Pₘₐₓ = Vₜₕ²/(4×Rₜₕ) = (16V)²/(4×6Ω) = 256V²/24Ω = 10.67W

### Question 4: Y-Δ Transformation
Convert a Y network with resistances R₁ = 10Ω, R₂ = 20Ω, and R₃ = 30Ω to its equivalent Δ network.

**Answer:**
Using the Y to Δ transformation formulas:
R₁₂ = (R₁×R₂ + R₂×R₃ + R₃×R₁)/R₃ = (10Ω×20Ω + 20Ω×30Ω + 30Ω×10Ω)/30Ω
    = (200Ω² + 600Ω² + 300Ω²)/30Ω = 1100Ω²/30Ω = 36.67Ω

R₂₃ = (R₁×R₂ + R₂×R₃ + R₃×R₁)/R₁ = (10Ω×20Ω + 20Ω×30Ω + 30Ω×10Ω)/10Ω
    = 1100Ω²/10Ω = 110Ω

R₃₁ = (R₁×R₂ + R₂×R₃ + R₃×R₁)/R₂ = (10Ω×20Ω + 20Ω×30Ω + 30Ω×10Ω)/20Ω
    = 1100Ω²/20Ω = 55Ω

Therefore, the equivalent Δ network has resistances R₁₂ = 36.67Ω, R₂₃ = 110Ω, and R₃₁ = 55Ω.

### Question 5: Millman's Theorem
Apply Millman's theorem to find the voltage across three parallel branches: Branch 1 with a 15V source in series with 5Ω, Branch 2 with a 10V source in series with 2Ω, and Branch 3 with a 5V source in series with 1Ω.

**Answer:**
Using Millman's theorem:
V = [(15V/5Ω) + (10V/2Ω) + (5V/1Ω)] / [(1/5Ω) + (1/2Ω) + (1/1Ω)]
V = [3A + 5A + 5A] / [0.2S + 0.5S + 1S]
V = 13A / 1.7S
V = 7.65V

Therefore, the common voltage across the three parallel branches is 7.65V.

### Question 6: Norton's Theorem
Find the Norton equivalent circuit with respect to terminals A-B for a network containing a 5A current source in parallel with a 20Ω resistor. This combination is in series with a 10Ω resistor, and terminals A-B are across the 10Ω resistor.

**Answer:**
To find the Norton current, calculate the short-circuit current through terminals A-B:
When terminals A-B are shorted, the 10Ω resistor is bypassed. The current through the short circuit equals the current through the 20Ω resistor, which is:
Iₙ = 5A × 20Ω/(20Ω) = 5A

To find the Norton resistance, deactivate the current source (replace it with an open circuit) and calculate the equivalent resistance looking back into the circuit from terminals A-B:
Rₙ = 10Ω + 20Ω = 30Ω

Therefore, the Norton equivalent circuit consists of a 5A current source in parallel with a 30Ω resistor.

### Question 7: Reciprocity Theorem
In a linear network, a 12V voltage source in branch A produces a current of 2A in branch B. If the voltage source is moved to branch B, what current will flow in branch A?

**Answer:**
According to the reciprocity theorem, if a voltage source V in branch A produces a current I in branch B, then the same voltage source V in branch B will produce the same current I in branch A.

Therefore, if a 12V source in branch A produces 2A in branch B, then a 12V source in branch B will produce 2A in branch A.

### Question 8: Source Transformation
Transform a circuit containing a 24V voltage source with a 6Ω internal resistance to its Norton equivalent. Then calculate the current that would flow through an 8Ω load connected across the terminals.

**Answer:**
To transform the voltage source to its Norton equivalent:
Norton current: Iₙ = V/Rₙₙₙₙₙₙₙₙ = 24V/6Ω = 4A
Norton resistance: Rₙ = 6Ω

The Norton equivalent consists of a 4A current source in parallel with a 6Ω resistor.

When an 8Ω load is connected, the current through the load is calculated using the current divider principle:
Iₙₙₙₙ = Iₙ × Rₙ/(Rₙ + Rₙₙₙₙ) = 4A × 6Ω/(6Ω + 8Ω) = 4A × 6Ω/14Ω = 1.71A

### Question 9: Compensation Theorem
In a circuit, a 100Ω resistor carries a current of 0.5A. If the resistor value changes to 120Ω, use the compensation theorem to determine the new current through the resistor.

**Answer:**
According to the compensation theorem, the effect of changing a resistance from R to R + ΔR can be analyzed by replacing the resistance change with a voltage source of value I×ΔR in series with the original resistance.

In this case, ΔR = 120Ω - 100Ω = 20Ω
The compensating voltage source has a value of Vₙₙₙₙ = I×ΔR = 0.5A×20Ω = 10V

This voltage source opposes the original current flow. If we denote the original circuit's Thévenin equivalent (looking into the 100Ω resistor) as Vₙₙ and Rₙₙ, then:
Vₙₙ = I×(Rₙₙ + 100Ω) = 0.5A×(Rₙₙ + 100Ω)

The new current with the compensating voltage source is:
Iₙₙₙ = (Vₙₙ - 10V)/(Rₙₙ + 100Ω) = (0.5A×(Rₙₙ + 100Ω) - 10V)/(Rₙₙ + 100Ω)
Iₙₙₙ = 0.5A - 10V/(Rₙₙ + 100Ω)

With the actual resistance change to 120Ω, the new current is:
Iₙₙₙ = Vₙₙ/(Rₙₙ + 120Ω) = 0.5A×(Rₙₙ + 100Ω)/(Rₙₙ + 120Ω)
Iₙₙₙ = 0.5A×(1 - 20Ω/(Rₙₙ + 120Ω))

Comparing these expressions and simplifying:
Iₙₙₙ = 0.5A×100Ω/(100Ω + 20Ω) = 0.5A×100Ω/120Ω = 0.5A×5/6 = 0.417A

Therefore, the new current through the 120Ω resistor is 0.417A.

### Question 10: Superposition with Current Sources
A circuit contains a 3A current source in parallel with a 6Ω resistor, and a 2A current source in parallel with a 12Ω resistor. These two combinations are connected in series, and a 4Ω resistor is connected across the open terminals. Use superposition to find the current through the 4Ω resistor.

**Answer:**
First, consider only the 3A current source (replacing the 2A source with an open circuit):
The 3A source divides between the 6Ω resistor and the series combination of the 12Ω and 4Ω resistors.
The equivalent resistance of the 12Ω and 4Ω resistors in series is 16Ω.
Using current division: I₁₄Ω = 3A × 6Ω/(6Ω + 16Ω) = 3A × 6Ω/22Ω = 0.818A

Next, consider only the 2A current source (replacing the 3A source with an open circuit):
The 2A source divides between the 12Ω resistor and the series combination of the 6Ω and 4Ω resistors.
The equivalent resistance of the 6Ω and 4Ω resistors in series is 10Ω.
Using current division: I₂₄Ω = 2A × 12Ω/(12Ω + 10Ω) = 2A × 12Ω/22Ω = 1.091A

The total current through the 4Ω resistor by superposition is:
I₄Ω = I₁₄Ω + I₂₄Ω = 0.818A + 1.091A = 1.909A

### Question 11: Thévenin to Solve Bridge Circuit
A Wheatstone bridge circuit consists of resistors R₁ = 10Ω, R₂ = 20Ω, R₃ = 30Ω, and R₄ = 40Ω arranged in a diamond pattern. A 24V source is connected across one diagonal, and a load resistor Rₙ = 50Ω is connected across the other diagonal. Use Thévenin's theorem to find the current through the load resistor.

**Answer:**
To apply Thévenin's theorem, we need to find the open-circuit voltage and equivalent resistance across the terminals where Rₙ is connected.

The bridge circuit can be viewed as two voltage dividers: R₁-R₂ and R₃-R₄.

The voltage at the junction of R₁ and R₂ is:
V₁ = 24V × R₂/(R₁ + R₂) = 24V × 20Ω/30Ω = 16V

The voltage at the junction of R₃ and R₄ is:
V₂ = 24V × R₄/(R₃ + R₄) = 24V × 40Ω/70Ω = 13.71V

The Thévenin voltage is the difference between these voltages:
Vₙₙ = V₁ - V₂ = 16V - 13.71V = 2.29V

To find the Thévenin resistance, deactivate the voltage source and calculate the equivalent resistance looking into the terminals:
Rₙₙ = (R₁ || R₃) + (R₂ || R₄) = (10Ω × 30Ω)/(10Ω + 30Ω) + (20Ω × 40Ω)/(20Ω + 40Ω)
Rₙₙ = 7.5Ω + 13.33Ω = 20.83Ω

The current through the load resistor is:
Iₙ = Vₙₙ/(Rₙₙ + Rₙ) = 2.29V/(20.83Ω + 50Ω) = 2.29V/70.83Ω = 0.032A = 32mA

### Question 12: Delta-Y Transformation
Convert a delta network with resistances Rₐₑ = 30Ω, Rₑₒ = 60Ω, and Rₒₐ = 40Ω to its equivalent Y network.

**Answer:**
Using the delta to Y transformation formulas:

Rₐ = (Rₐₑ × Rₒₐ)/(Rₐₑ + Rₑₒ + Rₒₐ) = (30Ω × 40Ω)/(30Ω + 60Ω + 40Ω)
    = 1200Ω²/130Ω = 9.23Ω

Rₑ = (Rₐₑ × Rₑₒ)/(Rₐₑ + Rₑₒ + Rₒₐ) = (30Ω × 60Ω)/(30Ω + 60Ω + 40Ω)
    = 1800Ω²/130Ω = 13.85Ω

Rₒ = (Rₑₒ × Rₒₐ)/(Rₐₑ + Rₑₒ + Rₒₐ) = (60Ω × 40Ω)/(30Ω + 60Ω + 40Ω)
    = 2400Ω²/130Ω = 18.46Ω

Therefore, the equivalent Y network has resistances Rₐ = 9.23Ω, Rₑ = 13.85Ω, and Rₒ = 18.46Ω.

### Question 13: Maximum Power Transfer in AC Circuits
A source with Thévenin equivalent parameters Vₙₙ = 120V and Zₙₙ = 50 + j40Ω is connected to a load impedance Zₙ. Determine the load impedance for maximum power transfer and calculate this maximum power.

**Answer:**
In AC circuits, maximum power transfer occurs when the load impedance is the complex conjugate of the source's Thévenin impedance:
Zₙ = Zₙₙ* = 50 - j40Ω

The maximum power transferred to this load is:
Pₙₙₙ = |Vₙₙ|²/(4 × Re{Zₙₙ}) = (120V)²/(4 × 50Ω) = 14400V²/200Ω = 72W

Therefore, maximum power transfer occurs with a load impedance of 50 - j40Ω, delivering 72W of power.

### Question 14: Tellegen's Theorem Verification
A circuit contains four elements with the following voltage-current pairs: (10V, 2A), (6V, -3A), (-8V, 1A), and (-4V, 0.5A). Verify Tellegen's theorem for this circuit.

**Answer:**
According to Tellegen's theorem, the sum of all power in a network is zero:
∑VₙIₙ = 0

Calculating the power for each element:
P₁ = 10V × 2A = 20W (power delivered)
P₂ = 6V × (-3A) = -18W (power absorbed)
P₃ = (-8V) × 1A = -8W (power absorbed)
P₄ = (-4V) × 0.5A = -2W (power absorbed)

The sum of all powers is:
Pₙₙₙₙₙ = P₁ + P₂ + P₃ + P₄ = 20W + (-18W) + (-8W) + (-2W) = 20W - 18W - 8W - 2W = 0W

This confirms Tellegen's theorem, demonstrating that the total power in the circuit is conserved.

### Question 15: Millman's Theorem with Current Sources
Apply Millman's theorem to find the voltage across three parallel branches: Branch 1 with a 4A current source in series with a 5Ω resistor, Branch 2 with a 3A current source in series with a 10Ω resistor, and Branch 3 with a 20Ω resistor.

**Answer:**
For branches with current sources, we modify Millman's theorem. The current source contribution to the numerator is simply the current value with appropriate sign.

V = [4A + 3A + 0] / [(1/5Ω) + (1/10Ω) + (1/20Ω)]
V = 7A / [0.2S + 0.1S + 0.05S]
V = 7A / 0.35S
V = 20V

Therefore, the common voltage across the three parallel branches is 20V.

## Summary

Network theorems form the foundation of circuit analysis, providing methods to simplify complex networks and predict their behavior. Superposition analyzes multi-source circuits by considering sources independently. Thévenin and Norton theorems replace networks with simple equivalent circuits. Maximum power transfer identifies optimal load conditions. Source transformation converts between voltage and current representations. Millman's theorem handles parallel branches efficiently. Reciprocity relates excitations and responses between different branches. Y-Δ transformation converts between three-terminal configurations. These principles enable efficient analysis, design optimization, and troubleshooting across diverse electrical engineering applications.
