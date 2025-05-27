# Reactance and Impedance

## Introduction
Reactance and impedance are fundamental concepts in AC circuit analysis that describe how circuit elements oppose the flow of alternating current. While resistance is the only form of opposition in DC circuits, AC circuits introduce two additional forms of opposition: inductive reactance and capacitive reactance. Understanding these concepts is essential for analyzing and designing AC circuits in power systems, electronics, telecommunications, and many other applications.

## Reactance

### Definition and Concept
Reactance (X) represents the opposition to changes in current or voltage due to inductance or capacitance. Unlike resistance, reactance does not dissipate energy in an ideal circuit. Instead, energy is temporarily stored in electric or magnetic fields and then returned to the circuit. Reactance causes a phase shift between voltage and current, with the exact relationship depending on whether the reactance is inductive or capacitive. Like resistance, reactance is measured in ohms (Ω), but its value changes with the frequency of the AC signal.

### Types of Reactance

#### 1. Inductive Reactance (XL)
Inductive reactance represents the opposition to current change produced by an inductor. When current flows through an inductor, a magnetic field is established. Changes in this current induce a voltage that opposes the change, following Faraday's law of electromagnetic induction. The mathematical expression for inductive reactance is:

$$ X_L = \omega L = 2\pi f L $$

Here, $X_L$ is the inductive reactance in ohms, $\omega$ is the angular frequency in radians per second, $f$ is the frequency in hertz, and $L$ is the inductance in henries. Inductive reactance increases linearly with frequency, meaning that inductors present greater opposition to high-frequency currents than to low-frequency currents. In circuit analysis, inductive reactance is represented as a positive imaginary number ($jX_L$). At DC (zero frequency), an ideal inductor acts as a short circuit since $X_L = 0$. Conversely, as frequency approaches infinity, the inductive reactance approaches infinity, effectively becoming an open circuit.

#### 2. Capacitive Reactance (XC)
Capacitive reactance describes the opposition to voltage change produced by a capacitor. Capacitors store energy in an electric field between their plates. When voltage across a capacitor changes, the resulting current flow works to maintain the relationship $Q = CV$. The mathematical expression for capacitive reactance is:

$$ X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C} $$

Here, $X_C$ is the capacitive reactance in ohms, $\omega$ is the angular frequency, $f$ is the frequency, and $C$ is the capacitance in farads. Unlike inductive reactance, capacitive reactance decreases with increasing frequency. This means capacitors present less opposition to high-frequency currents than to low-frequency currents. In circuit analysis, capacitive reactance is represented as a negative imaginary number ($-jX_C$). At DC, an ideal capacitor acts as an open circuit since $X_C$ approaches infinity. At very high frequencies, the capacitive reactance approaches zero, effectively becoming a short circuit.

### Frequency Dependence of Reactance
The frequency dependence of reactance is a critical aspect of AC circuit behavior and forms the foundation for many practical applications. Inductive reactance increases linearly with frequency, while capacitive reactance decreases inversely with frequency. This complementary relationship creates interesting circuit behaviors when inductors and capacitors are combined.

The frequency-dependent nature of reactance enables the creation of frequency-selective circuits like filters, which can pass or block signals based on their frequency content. It also explains resonance phenomena, where inductive and capacitive reactances cancel each other at specific frequencies. This principle is used in tuning circuits for radio receivers, crossover networks in audio systems, and various transmission line applications.

## Impedance

### Definition and Concept
Impedance (Z) represents the total opposition to current flow in an AC circuit, extending the concept of resistance to include the effects of inductors and capacitors. Unlike pure resistance, impedance is a complex quantity that accounts for both the magnitude of opposition and the phase relationships between voltage and current. The mathematical representation of impedance combines resistance and reactance:

$$ Z = R + jX $$

In this expression, $Z$ is the complex impedance in ohms, $R$ is the resistance (real part) in ohms, $X$ is the reactance (imaginary part) in ohms, and $j$ is the imaginary unit ($j = \sqrt{-1}$). The resistance component represents energy dissipation, while the reactance component represents energy storage.

### Complex Representation of Impedance
The complex nature of impedance allows it to be represented in several equivalent forms, each useful for different types of analysis:

#### 1. Rectangular Form
The rectangular form expresses impedance as the sum of its real and imaginary components:
$$ Z = R + jX $$

Where $X = X_L - X_C$ is the net reactance. This form is particularly useful for circuit analysis involving series and parallel combinations of components.

#### 2. Polar Form
The polar form expresses impedance in terms of its magnitude and phase angle:
$$ Z = |Z| \angle \theta $$

The magnitude $|Z| = \sqrt{R^2 + X^2}$ represents the ratio of voltage to current amplitudes, while the phase angle $\theta = \tan^{-1}(\frac{X}{R})$ represents the phase difference between voltage and current. Polar form is especially useful for phasor analysis and power calculations.

#### 3. Exponential Form
The exponential form is mathematically equivalent to the polar form but uses complex exponential notation:
$$ Z = |Z|e^{j\theta} $$

This representation is particularly useful in advanced circuit analysis, system theory, and when working with transfer functions.

### Impedance of Basic Circuit Elements

#### 1. Resistor
For a resistor, the impedance is simply its resistance value:
$$ Z_R = R $$

Resistors have purely real impedance with no imaginary component. This means there is no phase shift between voltage and current in a resistive circuit. The impedance of an ideal resistor remains constant regardless of frequency.

#### 2. Inductor
For an inductor, the impedance is purely imaginary and proportional to frequency:
$$ Z_L = j\omega L = jX_L $$

The positive imaginary nature of inductive impedance causes voltage to lead current by 90°. As frequency increases, the impedance of an inductor increases linearly, making inductors useful for blocking high-frequency signals while passing low-frequency signals.

#### 3. Capacitor
For a capacitor, the impedance is also purely imaginary but inversely proportional to frequency:
$$ Z_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C} = -jX_C $$

The negative imaginary nature of capacitive impedance causes voltage to lag current by 90°. As frequency increases, the impedance of a capacitor decreases, making capacitors useful for passing high-frequency signals while blocking low-frequency signals.

### Impedance in Series and Parallel Circuits

#### Series Connections
In a series circuit, all components share the same current, and their impedances add directly, following the same principle as resistors in series:

$$ Z_{series} = Z_1 + Z_2 + ... + Z_n $$

For a series RLC circuit, the total impedance is:
$$ Z_{series} = R + j(\omega L - \frac{1}{\omega C}) = R + j(X_L - X_C) $$

This expression shows how the inductive and capacitive reactances can partially cancel each other, leading to resonance when they are equal.

#### Parallel Connections
In a parallel circuit, all components share the same voltage, and the reciprocals of their impedances (admittances) add:

$$ \frac{1}{Z_{parallel}} = \frac{1}{Z_1} + \frac{1}{Z_2} + ... + \frac{1}{Z_n} $$

For a parallel RLC circuit, the calculation becomes more complex:
$$ \frac{1}{Z_{parallel}} = \frac{1}{R} + \frac{1}{j\omega L} + j\omega C $$

This can be simplified to:
$$ Z_{parallel} = \frac{R \cdot j\omega L \cdot \frac{1}{j\omega C}}{R \cdot j\omega L + R \cdot \frac{1}{j\omega C} + j\omega L \cdot \frac{1}{j\omega C}} $$

Parallel combinations often require algebraic manipulation to find the equivalent impedance in a form that provides insight into circuit behavior.

## Admittance, Susceptance, and Conductance

### Admittance (Y)
Admittance represents the ease with which alternating current flows through a circuit element or network. As the reciprocal of impedance, admittance provides an alternative approach to analyzing AC circuits, particularly those with parallel connections. The mathematical expression for admittance is:

$$ Y = \frac{1}{Z} = G + jB $$

In this expression, $Y$ is the complex admittance measured in siemens (S), $G$ is the conductance (real part) in siemens, and $B$ is the susceptance (imaginary part) in siemens. Just as impedance combines resistance and reactance, admittance combines conductance and susceptance.

### Conductance (G)
Conductance represents the real part of admittance and corresponds to the energy-dissipating aspect of the circuit. For a complex impedance, the conductance is not simply the reciprocal of resistance but is given by:

$$ G = \frac{1}{R} = \frac{R}{R^2 + X^2} $$

This formula shows that conductance depends on both resistance and reactance. For a pure resistor, conductance is simply the reciprocal of resistance, but for circuits with reactance, the relationship becomes more complex.

### Susceptance (B)
Susceptance represents the imaginary part of admittance and corresponds to the energy-storing aspect of the circuit. The mathematical expression for susceptance is:

$$ B = \frac{-X}{R^2 + X^2} $$

The negative sign in this formula indicates that susceptance has the opposite sign to reactance. For specific circuit elements, the susceptance takes particular forms. Inductive susceptance is given by $B_L = -\frac{1}{X_L} = -\frac{1}{\omega L}$, which is negative and decreases in magnitude with increasing frequency. Capacitive susceptance is given by $B_C = \frac{1}{X_C} = \omega C$, which is positive and increases with frequency. These complementary behaviors are important in analyzing resonant circuits.

## Impedance Diagrams and Phasors

### Impedance Triangle
The impedance triangle provides a visual representation of the relationship between resistance, reactance, and impedance in the complex plane. In this representation, resistance is plotted along the horizontal (real) axis, and reactance along the vertical (imaginary) axis. The impedance vector forms the hypotenuse of a right triangle, with its magnitude $|Z| = \sqrt{R^2 + X^2}$ representing the ratio of voltage to current amplitudes. The angle $\theta = \tan^{-1}(\frac{X}{R})$ between the impedance vector and the horizontal axis represents the phase difference between voltage and current. This graphical approach helps in understanding the relative contributions of resistance and reactance to the overall impedance.

### Phasor Diagrams
Phasor diagrams extend the concept of the impedance triangle to show the relationship between voltage and current in AC circuits. These diagrams represent sinusoidal quantities as rotating vectors (phasors) in the complex plane, with the length of the vector representing amplitude and the angle representing phase. For a resistor, voltage and current phasors are aligned, indicating they are in phase. For an inductor, the voltage phasor leads the current phasor by 90°, while for a capacitor, the current phasor leads the voltage phasor by 90°. Phasor diagrams are particularly useful for analyzing complex circuits, as they allow the addition of sinusoidal quantities with different phases using vector addition.

## Resonance

### Series Resonance
Resonance represents one of the most fascinating phenomena in AC circuits, occurring when energy oscillates between the electric field of a capacitor and the magnetic field of an inductor. In a series RLC circuit, resonance occurs when the inductive reactance exactly equals the capacitive reactance:

$$ X_L = X_C $$
$$ \omega L = \frac{1}{\omega C} $$

Solving this equality for frequency yields the resonant frequency:

$$ \omega_0 = \frac{1}{\sqrt{LC}} $$
$$ f_0 = \frac{1}{2\pi\sqrt{LC}} $$

At this specific frequency, several remarkable circuit behaviors emerge. The net reactance becomes zero, leaving the circuit impedance at its minimum value, equal to just the resistance: $Z = R$. This minimum impedance results in maximum current flow for a given voltage source. The circuit operates at unity power factor, meaning voltage and current are in phase, and all power delivered to the circuit is dissipated in the resistor. Perhaps most interestingly, the voltages across the inductor and capacitor can be substantially larger than the source voltage, as they are 180° out of phase with each other and their magnitudes are Q times the source voltage.

### Parallel Resonance
Parallel resonance occurs in RLC circuits where the components are connected in parallel rather than in series. At resonance, the condition becomes:

$$ \frac{1}{X_L} = \frac{1}{X_C} $$

Which is equivalent to $X_L = X_C$. For an ideal parallel LC circuit with infinite resistance, the resonant frequency formula is identical to that of series resonance:

$$ f_0 = \frac{1}{2\pi\sqrt{LC}} $$

However, the circuit behavior at resonance differs significantly from series resonance. The impedance reaches its maximum value rather than its minimum, resulting in minimum line current for a given voltage source. The circuit again operates at unity power factor. A notable characteristic of parallel resonance is the potentially large circulating current between the inductor and capacitor, even while the source current remains small. This circulating current represents energy oscillating between the magnetic field of the inductor and the electric field of the capacitor.

### Quality Factor (Q)
The quality factor, commonly denoted as Q, quantifies the "quality" of resonance in a circuit. It measures how sharply the circuit responds to frequencies near resonance and indicates the ratio of energy stored to energy dissipated per cycle. For a series resonant circuit, Q is given by:

$$ Q = \frac{X_L}{R} = \frac{X_C}{R} = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 CR} $$

For a parallel resonant circuit, Q takes the form:

$$ Q = \frac{R}{X_L} = \frac{R}{X_C} = R\omega_0 C = \frac{R}{\omega_0 L} $$

A higher Q value indicates a more selective circuit with a sharper resonance peak. The Q factor directly relates to the bandwidth of the resonant circuit, which is the frequency range over which the response remains within 70.7% (3 dB) of its maximum value:

$$ BW = \frac{f_0}{Q} $$

This relationship shows that higher Q circuits have narrower bandwidths, making them more selective but also more sensitive to component variations and environmental factors.

## Impedance Matching

### Importance of Impedance Matching
Impedance matching represents a critical concept in electrical engineering with applications spanning power systems, communications, audio engineering, and electronics. The process involves adjusting circuit elements to ensure optimal interaction between different parts of a system. Proper impedance matching serves multiple purposes: it maximizes the transfer of power from source to load, minimizes signal reflections that can cause distortion and power loss, optimizes overall system efficiency, and preserves signal integrity by reducing distortion. In high-frequency applications, impedance mismatches can lead to standing waves, signal reflections, and power loss, making matching particularly important in RF and microwave systems.

### Maximum Power Transfer Theorem
The maximum power transfer theorem provides the theoretical foundation for impedance matching. According to this theorem, maximum power is transferred from a source to a load when the load impedance equals the complex conjugate of the source impedance:

$$ Z_{load} = Z_{source}^* $$

The complex conjugate relationship means that the resistive parts must be equal, while the reactive parts must be equal in magnitude but opposite in sign. For purely resistive circuits, this simplifies to matching the load resistance to the source resistance. For complex impedances, proper matching requires both resistance matching and reactance cancellation. This principle is particularly important in applications where power delivery is critical, such as audio amplifiers, RF transmitters, and power distribution systems.

### Impedance Matching Networks
Various circuit configurations serve as impedance matching networks, each with specific advantages for different applications. L-networks, named for their L-shaped topology, represent the simplest matching networks, consisting of just two reactive elements. They can match a wide range of impedances but offer limited bandwidth and no control over the circuit's Q factor. T-networks and Pi-networks (named for their resemblance to the letters T and π) use three reactive elements, providing greater flexibility, bandwidth control, and the ability to set the circuit's Q factor. Transformer matching uses the turns ratio of a transformer to match impedances according to the relationship $Z_2 = Z_1 × (N_2/N_1)^2$, offering galvanic isolation and the ability to match widely different impedance levels. The choice of matching network depends on bandwidth requirements, complexity constraints, and the specific impedances to be matched.

## Applications of Reactance and Impedance

### 1. Filters
Filter circuits represent one of the most important applications of reactance and impedance concepts. These circuits selectively pass or block signals based on their frequency content. Low-pass filters, using capacitors in shunt or inductors in series, allow low-frequency signals to pass while attenuating high frequencies. High-pass filters, using capacitors in series or inductors in shunt, do the opposite, blocking low frequencies while passing high frequencies. Band-pass filters combine these approaches to pass only a specific range of frequencies, while band-stop (notch) filters block a specific frequency range. The frequency-dependent nature of reactance makes these filters possible, with capacitive reactance decreasing and inductive reactance increasing with frequency. Filter applications span numerous fields, from audio crossover networks that direct appropriate frequency ranges to different speakers, to RF filters in communication systems that select desired signals and reject interference.

### 2. Power Factor Correction
Power factor correction addresses the inefficiency caused by reactive power in AC power systems. Industrial loads, particularly those with motors and transformers, often have a significant inductive component, causing current to lag voltage and reducing the power factor. This lagging power factor increases current requirements, raises transmission losses, and can incur utility penalties. Power factor correction typically involves adding capacitors in parallel with inductive loads to counteract the lagging current. The capacitive current, which leads voltage by 90°, partially cancels the lagging inductive current, bringing the overall current closer to being in phase with voltage. This correction improves transmission efficiency by reducing the current magnitude for the same power delivery, lowers electricity costs by avoiding power factor penalties, and increases the capacity of existing power distribution systems.

### 3. Impedance Matching in Transmission Lines
Transmission line applications highlight the critical importance of impedance matching in high-frequency systems. When a transmission line's characteristic impedance differs from the load impedance, signal reflections occur at the interface. These reflections create standing waves, reduce power transfer efficiency, and can damage sensitive equipment. Proper impedance matching prevents these reflections by ensuring that the load appears to have the same impedance as the transmission line. The effectiveness of matching is often measured by the standing wave ratio (SWR), with a perfect match yielding an SWR of 1:1. Matching techniques include quarter-wave transformers, stub matching, and various matching networks. Applications range from cable television systems and cellular networks to satellite communications and high-speed digital circuits.

### 4. Resonant Circuits
Resonant circuits leverage the frequency-dependent behavior of inductors and capacitors to create frequency-selective systems. Tuning circuits in radio receivers use resonance to select specific broadcast frequencies while rejecting others. Oscillators use resonant circuits to generate stable sinusoidal signals at specific frequencies, forming the basis for signal generation in communications, timing circuits, and test equipment. Wireless power transfer systems often employ resonant coupling, where matched resonant frequencies between transmitter and receiver circuits enable efficient power transfer across air gaps. The high Q factor achievable in resonant circuits makes them particularly valuable in applications requiring frequency selectivity or energy storage.

### 5. AC Circuit Analysis
The concepts of reactance and impedance form the foundation of AC circuit analysis techniques. Network theorems such as Thévenin's and Norton's theorems, originally developed for DC circuits, extend to AC circuits through the use of complex impedances. Superposition principle allows the analysis of circuits with multiple AC sources of different frequencies. Frequency response analysis examines how circuit behavior changes across a spectrum of frequencies, essential for filter design and system stability analysis. Transient analysis studies how circuits respond to sudden changes, combining the steady-state AC response with the natural response of energy-storing elements. These analytical techniques are essential tools for designing and understanding the behavior of AC circuits in applications ranging from power systems to electronic devices.

## Practical Considerations

### 1. Non-Ideal Components
While theoretical analysis often assumes perfect components, real-world circuit elements exhibit non-ideal behaviors that can significantly affect circuit performance. Inductors, for instance, possess inherent resistance due to the resistivity of their wire material, leading to power dissipation and a reduction in the quality factor. This resistance is often modeled as a series resistor in the inductor's equivalent circuit. Similarly, capacitors exhibit leakage resistance, effectively placing a high-value resistor in parallel with the ideal capacitor, causing slow discharge over time and affecting long-term energy storage. 

Parasitic effects further complicate component behavior. Inductors inherently have capacitance between their windings, creating a parallel resonant circuit that limits their useful frequency range. Capacitors exhibit parasitic inductance due to their leads and internal connections, which becomes significant at high frequencies. These parasitic elements create self-resonant frequencies beyond which components behave contrary to their intended function. Understanding these non-idealities becomes crucial when designing high-frequency circuits or precision applications where component behavior must be accurately predicted.

### 2. Frequency Limitations
Component behavior undergoes significant changes at high frequencies due to various physical phenomena. The skin effect causes AC current to flow primarily near the surface of conductors as frequency increases, effectively reducing the usable cross-sectional area and increasing resistance. This effect becomes noticeable above 100 kHz and can increase resistance by orders of magnitude at radio frequencies. 

The previously mentioned parasitic effects also impose frequency limitations. Every capacitor has a self-resonant frequency above which it begins to behave inductively, while inductors have self-resonant frequencies above which they behave capacitively. These transitions can cause unexpected circuit behavior if not properly accounted for in design. Additionally, dielectric losses in capacitors and core losses in inductors tend to increase with frequency, reducing component efficiency and potentially causing thermal issues. When designing high-frequency circuits, engineers must select components specifically rated for the intended frequency range and often must include these non-ideal behaviors in their circuit models.

### 3. Temperature Effects
Temperature variations can significantly alter component values and circuit performance. Resistors typically have a positive temperature coefficient, meaning their resistance increases with temperature. The magnitude of this effect varies with resistor type, with carbon composition resistors showing greater temperature sensitivity than metal film types. 

Capacitor behavior under temperature variations depends on the dielectric material. Ceramic capacitors with X7R dielectrics might vary by ±15% over their operating temperature range, while NP0/C0G types offer much better stability. Electrolytic capacitors show significant parameter shifts with temperature and may fail entirely at temperature extremes. 

Inductors experience temperature effects primarily through their core materials, with ferrite cores showing significant permeability changes with temperature that affect inductance values. These temperature dependencies necessitate derating in designs that must operate over wide temperature ranges and may require temperature compensation techniques in precision applications. Critical circuits often specify components with guaranteed performance over the required temperature range and may include temperature compensation networks to maintain stable operation.

## Example Problems

### Example 1: Series RL Circuit
**Problem:** A series RL circuit consists of a resistor R = 100 Ω and an inductor L = 50 mH. Calculate the impedance and phase angle at frequencies of 60 Hz and 1000 Hz.

**Solution:**
For the 60 Hz case, we first calculate the inductive reactance using $X_L = 2\pi f L = 2\pi \times 60 \times 0.05 = 18.85$ Ω. The impedance magnitude is found using the Pythagorean relationship $Z = \sqrt{R^2 + X_L^2} = \sqrt{100^2 + 18.85^2} = 101.8$ Ω. The phase angle, representing the lag of current behind voltage, is $\theta = \tan^{-1}(\frac{X_L}{R}) = \tan^{-1}(\frac{18.85}{100}) = 10.7°$.

At the higher frequency of 1000 Hz, the inductive reactance increases substantially to $X_L = 2\pi \times 1000 \times 0.05 = 314.2$ Ω. This causes the impedance to increase to $Z = \sqrt{100^2 + 314.2^2} = 329.4$ Ω, and the phase angle increases dramatically to $\theta = \tan^{-1}(\frac{314.2}{100}) = 72.3°$. 

This example illustrates how the impedance of an RL circuit increases with frequency, with the circuit becoming more inductive (larger phase angle) at higher frequencies. At very low frequencies, the circuit would behave almost resistively, while at very high frequencies, it would approach purely inductive behavior with a phase angle nearing 90°.

### Example 2: Series RC Circuit
**Problem:** A series RC circuit has R = 220 Ω and C = 10 μF. Find the impedance and phase angle at 50 Hz and 5 kHz.

**Solution:**
At 50 Hz, the capacitive reactance is $X_C = \frac{1}{2\pi f C} = \frac{1}{2\pi \times 50 \times 10 \times 10^{-6}} = 318.3$ Ω. The impedance magnitude is $Z = \sqrt{R^2 + X_C^2} = \sqrt{220^2 + 318.3^2} = 387.1$ Ω. Since capacitive reactance causes current to lead voltage, the phase angle is negative: $\theta = \tan^{-1}(\frac{-X_C}{R}) = \tan^{-1}(\frac{-318.3}{220}) = -55.4°$.

When the frequency increases to 5 kHz, the capacitive reactance decreases dramatically to $X_C = \frac{1}{2\pi \times 5000 \times 10 \times 10^{-6}} = 3.18$ Ω. This results in an impedance that is almost purely resistive: $Z = \sqrt{220^2 + 3.18^2} = 220.02$ Ω, with a phase angle approaching zero: $\theta = \tan^{-1}(\frac{-3.18}{220}) = -0.83°$.

This example demonstrates the opposite frequency behavior compared to the RL circuit. In an RC circuit, impedance decreases with increasing frequency, and the circuit becomes more resistive at higher frequencies. At very low frequencies, an RC circuit approaches capacitive behavior with a phase angle near -90°, while at very high frequencies, it approaches purely resistive behavior.

### Example 3: Series RLC Circuit
**Problem:** A series RLC circuit has R = 50 Ω, L = 100 mH, and C = 47 μF. Calculate:
a) The resonant frequency
b) The impedance at resonance
c) The impedance and phase angle at 100 Hz

**Solution:**
The resonant frequency occurs when inductive and capacitive reactances are equal. Using the formula $f_0 = \frac{1}{2\pi\sqrt{LC}}$, we calculate $f_0 = \frac{1}{2\pi\sqrt{0.1 \times 47 \times 10^{-6}}} = 73.4$ Hz.

At resonance, the inductive and capacitive reactances cancel each other exactly, resulting in a purely resistive impedance: $Z = R = 50$ Ω. At this frequency, voltage and current are in phase.

At 100 Hz, which is above the resonant frequency, we calculate the reactances: $X_L = 2\pi \times 100 \times 0.1 = 62.8$ Ω and $X_C = \frac{1}{2\pi \times 100 \times 47 \times 10^{-6}} = 33.9$ Ω. The net reactance is inductive: $X = X_L - X_C = 62.8 - 33.9 = 28.9$ Ω. The impedance magnitude is $Z = \sqrt{50^2 + 28.9^2} = 57.8$ Ω with a phase angle of $\theta = \tan^{-1}(\frac{28.9}{50}) = 30.0°$.

This example illustrates the behavior of a series RLC circuit, which exhibits minimum impedance at resonance and becomes increasingly inductive above resonance or increasingly capacitive below resonance.

### Example 4: Parallel RLC Circuit
**Problem:** A parallel RLC circuit has R = 1 kΩ, L = 50 mH, and C = 0.1 μF. Calculate the impedance at 5 kHz.

**Solution:**
For parallel circuits, it's often easier to work with admittances. At 5 kHz, the reactances are $X_L = 2\pi \times 5000 \times 0.05 = 1570.8$ Ω and $X_C = \frac{1}{2\pi \times 5000 \times 0.1 \times 10^{-6}} = 318.3$ Ω.

Converting to admittances, we have conductance $G = \frac{1}{R} = \frac{1}{1000} = 0.001$ S, inductive susceptance $B_L = \frac{1}{X_L} = \frac{1}{1570.8} = 0.000637$ S, and capacitive susceptance $B_C = \frac{1}{X_C} = \frac{1}{318.3} = 0.00314$ S. 

The total susceptance is $B = B_C - B_L = 0.00314 - 0.000637 = 0.002503$ S, and the total admittance magnitude is $Y = \sqrt{G^2 + B^2} = \sqrt{0.001^2 + 0.002503^2} = 0.00269$ S.

Converting back to impedance, we get $Z = \frac{1}{Y} = \frac{1}{0.00269} = 371.7$ Ω with a phase angle of $\theta = \tan^{-1}(\frac{-B}{G}) = \tan^{-1}(\frac{-0.002503}{0.001}) = -68.2°$.

This example demonstrates the analysis of a parallel RLC circuit, which behaves quite differently from its series counterpart. The negative phase angle indicates that the circuit is predominantly capacitive at this frequency, despite having both inductive and capacitive elements.

### Example 5: Impedance Matching
**Problem:** A signal source with an output impedance of 75 Ω + j0 Ω needs to be matched to a load with impedance 300 Ω - j100 Ω using an L-network. Design the matching network.

**Solution:**
For maximum power transfer, the source should see an impedance equal to its own complex conjugate. Since the source impedance is purely resistive (75 Ω + j0 Ω), the matching network must transform the load impedance to 75 Ω + j0 Ω when viewed from the source.

We can use an L-network consisting of a series inductor and a shunt capacitor. First, we calculate the quality factor Q needed for the transformation:

$Q = \sqrt{\frac{R_L}{R_S} - 1} = \sqrt{\frac{300}{75} - 1} = \sqrt{3} = 1.732$

The series reactance needed is:
$X_{series} = QR_S = 1.732 \times 75 = 129.9$ Ω

The parallel reactance needed is:
$X_{parallel} = \frac{R_L}{Q} + \frac{X_L}{Q^2+1} = \frac{300}{1.732} + \frac{-100}{1.732^2+1} = 173.2 - 23.7 = 149.5$ Ω

Since $X_{series}$ is positive, we need a series inductor with reactance 129.9 Ω. Since $X_{parallel}$ is positive, we need a parallel inductor with reactance 149.5 Ω.

This example illustrates how impedance matching networks can be designed to maximize power transfer between source and load with different impedances, a critical consideration in RF systems, audio equipment, and power delivery applications.

### Example 6: Power Factor Correction
**Problem:** An industrial load draws 100 kW at 0.8 lagging power factor from a 440 V, 60 Hz supply. Calculate the capacitance needed to correct the power factor to 0.95 lagging.

**Solution:**
First, we determine the apparent power and reactive power before correction:

$S_1 = \frac{P}{\cos\phi_1} = \frac{100 \times 10^3}{0.8} = 125$ kVA

$Q_1 = P \times \tan\phi_1 = 100 \times 10^3 \times \tan(\cos^{-1}0.8) = 75$ kVAR

After correction, the new reactive power will be:

$Q_2 = P \times \tan\phi_2 = 100 \times 10^3 \times \tan(\cos^{-1}0.95) = 32.9$ kVAR

The reactive power to be supplied by the capacitor is:

$Q_C = Q_1 - Q_2 = 75 - 32.9 = 42.1$ kVAR

The capacitive reactance needed is:

$X_C = \frac{V^2}{Q_C} = \frac{440^2}{42.1 \times 10^3} = 4.6$ Ω

The required capacitance is:

$C = \frac{1}{2\pi f X_C} = \frac{1}{2\pi \times 60 \times 4.6} = 576$ μF

This example demonstrates how capacitors are used for power factor correction in industrial settings, reducing reactive power demands on the supply system and improving efficiency.

### Example 7: Filter Circuit Analysis
**Problem:** A low-pass RC filter has R = 10 kΩ and C = 10 nF. Calculate the cutoff frequency and the gain and phase shift at half and twice the cutoff frequency.

**Solution:**
The cutoff frequency of an RC low-pass filter is given by:

$f_c = \frac{1}{2\pi RC} = \frac{1}{2\pi \times 10 \times 10^3 \times 10 \times 10^{-9}} = 1.59$ kHz

At this frequency, the capacitive reactance equals the resistance: $X_C = R = 10$ kΩ.

The voltage gain of the filter at any frequency is:

$|H(f)| = \frac{1}{\sqrt{1+(\frac{f}{f_c})^2}}$

The phase shift is:

$\phi(f) = -\tan^{-1}(\frac{f}{f_c})$

At half the cutoff frequency (0.795 kHz):
$|H(0.5f_c)| = \frac{1}{\sqrt{1+(0.5)^2}} = \frac{1}{\sqrt{1.25}} = 0.894$ or -0.97 dB
$\phi(0.5f_c) = -\tan^{-1}(0.5) = -26.6°$

At twice the cutoff frequency (3.18 kHz):
$|H(2f_c)| = \frac{1}{\sqrt{1+(2)^2}} = \frac{1}{\sqrt{5}} = 0.447$ or -7 dB
$\phi(2f_c) = -\tan^{-1}(2) = -63.4°$

This example shows how the frequency-dependent nature of reactance creates filtering effects, with the filter passing signals below the cutoff frequency while attenuating higher frequencies.

### Example 8: Resonant Bandwidth
**Problem:** A series RLC circuit has R = 10 Ω, L = 5 mH, and C = 2 μF. Calculate the resonant frequency, quality factor, and bandwidth.

**Solution:**
The resonant frequency is:

$f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{5 \times 10^{-3} \times 2 \times 10^{-6}}} = 1.59$ kHz

At resonance, the inductive reactance is:

$X_L = 2\pi f_0 L = 2\pi \times 1.59 \times 10^3 \times 5 \times 10^{-3} = 50$ Ω

The quality factor is:

$Q = \frac{X_L}{R} = \frac{50}{10} = 5$

The bandwidth is:

$BW = \frac{f_0}{Q} = \frac{1590}{5} = 318$ Hz

This means the half-power frequencies (where the response is 3 dB down from the peak) are at $f_1 = f_0 - \frac{BW}{2} = 1431$ Hz and $f_2 = f_0 + \frac{BW}{2} = 1749$ Hz.

This example illustrates how the quality factor relates to bandwidth in resonant circuits, with higher Q values resulting in narrower bandwidths and more selective frequency responses.

### Example 9: Transformer Impedance Matching
**Problem:** A 50 Ω antenna needs to be matched to a 300 Ω transmission line using a transformer. Calculate the required turns ratio.

**Solution:**
For impedance matching with a transformer, the relationship between impedances and turns ratio is:

$\frac{Z_2}{Z_1} = (\frac{N_2}{N_1})^2$

Where $Z_1$ and $Z_2$ are the primary and secondary impedances, and $N_1$ and $N_2$ are the primary and secondary turns.

Rearranging to find the turns ratio:

$\frac{N_2}{N_1} = \sqrt{\frac{Z_2}{Z_1}} = \sqrt{\frac{300}{50}} = \sqrt{6} = 2.45$

This means the secondary winding should have 2.45 times as many turns as the primary winding.

This example demonstrates how transformers can be used for impedance matching, a technique commonly employed in audio systems, RF circuits, and power distribution networks.

### Example 10: Skin Effect Calculation
**Problem:** A copper wire with diameter 2 mm carries an AC current at 100 kHz. Calculate the skin depth and the effective resistance compared to its DC resistance.

**Solution:**
The skin depth in a conductor is given by:

$\delta = \sqrt{\frac{\rho}{\pi f \mu}}$

Where $\rho$ is the resistivity of copper (1.68 × 10^-8 Ω·m), $f$ is the frequency, and $\mu$ is the permeability (approximately $\mu_0 = 4\pi \times 10^{-7}$ H/m for copper).

$\delta = \sqrt{\frac{1.68 \times 10^{-8}}{\pi \times 100 \times 10^3 \times 4\pi \times 10^{-7}}} = 0.206$ mm

The skin depth is significantly smaller than the wire radius (1 mm), indicating that the current flows primarily near the surface. The ratio of AC resistance to DC resistance can be approximated for this case as:

$\frac{R_{AC}}{R_{DC}} \approx \frac{r}{2\delta} = \frac{1}{2 \times 0.206} = 2.43$

This means the AC resistance at 100 kHz is about 2.43 times higher than the DC resistance due to the skin effect.

This example illustrates how the skin effect increases the effective resistance of conductors at high frequencies, an important consideration in RF circuit design and power transmission.

### Example 11: Transmission Line Impedance
**Problem:** A lossless transmission line has an inductance of 0.25 μH/m and a capacitance of 100 pF/m. Calculate its characteristic impedance and the wavelength at 200 MHz.

**Solution:**
The characteristic impedance of a transmission line is given by:

$Z_0 = \sqrt{\frac{L}{C}} = \sqrt{\frac{0.25 \times 10^{-6}}{100 \times 10^{-12}}} = 50$ Ω

The phase velocity on the line is:

$v_p = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.25 \times 10^{-6} \times 100 \times 10^{-12}}} = 2 \times 10^8$ m/s

The wavelength at 200 MHz is:

$\lambda = \frac{v_p}{f} = \frac{2 \times 10^8}{200 \times 10^6} = 1$ m

This example shows how the distributed inductance and capacitance of a transmission line determine its characteristic impedance and signal propagation properties.

### Example 12: Impedance of a Loudspeaker
**Problem:** A loudspeaker has a DC resistance of 8 Ω, an inductance of 0.5 mH, and a mechanical resonance that can be modeled as a series RLC circuit with R = 40 Ω, L = 30 mH, and C = 0.5 mF. Plot and analyze the impedance versus frequency.

**Solution:**
The loudspeaker can be modeled as a complex electrical circuit. The electrical impedance is:

$Z_{electrical} = 8 + j\omega \times 0.5 \times 10^{-3}$

The mechanical resonance contributes an impedance of:

$Z_{mechanical} = \frac{40 \times (j\omega \times 30 \times 10^{-3}) \times (\frac{1}{j\omega \times 0.5 \times 10^{-3}})}{40 + j\omega \times 30 \times 10^{-3} + \frac{1}{j\omega \times 0.5 \times 10^{-3}}}$

The total impedance is $Z_{total} = Z_{electrical} + Z_{mechanical}$

Calculating at various frequencies:
- At very low frequencies, the impedance approaches the DC resistance of 8 Ω
- At the mechanical resonance frequency ($f_0 = \frac{1}{2\pi\sqrt{LC}} = 41.1$ Hz), the impedance peaks
- At higher frequencies, the inductive component dominates, causing the impedance to rise with frequency

This complex impedance behavior explains why loudspeakers present a varying load to amplifiers across the audio frequency range, requiring careful amplifier design to maintain consistent performance.

### Example 13: Capacitive Voltage Divider
**Problem:** A capacitive voltage divider consists of C1 = 0.1 μF and C2 = 0.4 μF in series across a 100 V, 1 kHz AC source. Calculate the voltage across each capacitor and explain the result.

**Solution:**
The reactances of the capacitors are:

$X_{C1} = \frac{1}{2\pi f C_1} = \frac{1}{2\pi \times 1000 \times 0.1 \times 10^{-6}} = 1592$ Ω

$X_{C2} = \frac{1}{2\pi f C_2} = \frac{1}{2\pi \times 1000 \times 0.4 \times 10^{-6}} = 398$ Ω

In a series circuit, the voltage divides in proportion to the impedances. The voltage across C1 is:

$V_{C1} = V_{source} \times \frac{X_{C1}}{X_{C1} + X_{C2}} = 100 \times \frac{1592}{1592 + 398} = 80$ V

The voltage across C2 is:

$V_{C2} = V_{source} \times \frac{X_{C2}}{X_{C1} + X_{C2}} = 100 \times \frac{398}{1592 + 398} = 20$ V

Interestingly, the smaller capacitor (C1) has the larger voltage drop, contrary to what happens with resistors. This is because capacitive reactance is inversely proportional to capacitance. This principle is used in capacitive voltage dividers for high-voltage applications where resistive dividers would dissipate too much power.

### Example 14: Impedance of a Crystal Resonator
**Problem:** A quartz crystal resonator can be modeled as a series RLC circuit (R = 25 Ω, L = 3.5 H, C = 0.025 pF) in parallel with a static capacitance C0 = 4 pF. Calculate the series and parallel resonant frequencies and the impedance at each.

**Solution:**
The series resonant frequency is determined by the series RLC branch:

$f_s = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{3.5 \times 0.025 \times 10^{-12}}} = 5.38$ MHz

At this frequency, the impedance of the series branch is minimum and equal to R = 25 Ω.

The parallel resonant frequency occurs when the total susceptance of the circuit is zero. This happens at a slightly higher frequency than the series resonance:

$f_p = f_s\sqrt{1 + \frac{C}{C_0}} = 5.38 \times 10^6 \times \sqrt{1 + \frac{0.025 \times 10^{-12}}{4 \times 10^{-12}}} = 5.39$ MHz

At the parallel resonant frequency, the impedance is maximum and can be approximated as:

$Z_{max} \approx \frac{L}{RC_0^2} = \frac{3.5}{25 \times (4 \times 10^{-12})^2} = 87.5$ MΩ

This example illustrates the dual resonance behavior of crystal resonators, which makes them valuable as frequency-selective elements in oscillators and filters due to their extremely high Q factors and frequency stability.

### Example 15: Impedance Measurement Using the Three-Voltmeter Method
**Problem:** In a three-voltmeter impedance measurement setup, a known resistor R = 100 Ω is connected in series with an unknown impedance Z. The measured voltages are: source voltage Vs = 10 V, voltage across R is VR = 6 V, and voltage across Z is VZ = 8 V. Calculate the unknown impedance.

**Solution:**
The three-voltmeter method uses the relationship between the measured voltages to determine the unknown impedance. First, we check if the measurements are consistent using the voltage law:

$V_s^2 = V_R^2 + V_Z^2 + 2V_R V_Z \cos\phi$

Where φ is the phase angle between VR and VZ.

Rearranging to find cosφ:

$\cos\phi = \frac{V_s^2 - V_R^2 - V_Z^2}{2V_R V_Z} = \frac{10^2 - 6^2 - 8^2}{2 \times 6 \times 8} = \frac{100 - 36 - 64}{96} = 0$

This indicates that the current and voltage are 90° out of phase, suggesting a purely reactive impedance.

The magnitude of the unknown impedance is:

$|Z| = R\frac{V_Z}{V_R} = 100 \times \frac{8}{6} = 133.3$ Ω

Since cosφ = 0, the impedance is purely reactive: Z = j133.3 Ω, which could be either an inductor with XL = 133.3 Ω or a capacitor with XC = -133.3 Ω. To determine which, we would need additional information about the phase relationship.

This example demonstrates a practical method for measuring complex impedances using only voltage measurements, a technique useful in situations where direct impedance measurement is not possible.

## Summary
Reactance and impedance are fundamental concepts in AC circuit analysis that extend the concept of resistance to account for frequency-dependent behavior and phase relationships. Key points include:

- Reactance is the opposition to current due to inductors and capacitors
- Impedance combines resistance and reactance into a complex quantity
- Inductive reactance increases with frequency, while capacitive reactance decreases
- Series and parallel combinations of impedances follow specific rules
- Resonance occurs when inductive and capacitive reactances are equal
- Impedance matching is crucial for maximum power transfer
- Applications include filters, power factor correction, and transmission lines

Understanding these concepts enables engineers to analyze and design AC circuits for a wide range of applications in power systems, electronics, and communications.
