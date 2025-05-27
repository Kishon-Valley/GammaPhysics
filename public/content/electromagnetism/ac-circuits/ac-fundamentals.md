# AC Fundamentals

## Introduction

Alternating current (AC) represents a fundamental concept in electrical engineering and physics where the direction and magnitude of current vary periodically with time. Unlike direct current (DC), which maintains constant polarity, AC periodically reverses direction, completing cycles at a frequency measured in hertz (Hz). The predominance of AC in modern electrical infrastructure stems from its inherent advantages in power generation, transmission, and distribution. The key advantage lies in voltage transformation through electromagnetic induction, allowing for high-voltage transmission that significantly reduces resistive power losses proportional to the square of current (I²R losses), followed by safe voltage reduction for end-user consumption.

## Mathematical Representation of AC Signals

In the physical sciences, mathematical precision provides the foundation for understanding electromagnetic phenomena. Sinusoidal waveforms constitute the most fundamental representation of AC signals, described by the equations $v(t) = V_m \sin(\omega t + \phi_v)$ for voltage and $i(t) = I_m \sin(\omega t + \phi_i)$ for current. These expressions incorporate several critical parameters: the peak amplitudes $V_m$ and $I_m$, the angular frequency $\omega = 2\pi f$ measured in radians per second, the linear frequency $f$ measured in hertz, phase angles $\phi_v$ and $\phi_i$ in radians, and time $t$ in seconds.

![Sine Wave Animation](/content/images/electromagnetism/ac-circuits/sine_wave_animation.svg)
*Figure 1: Interactive animation showing the generation of a sinusoidal waveform, with key parameters labeled including amplitude, period, and phase angle.*

For analytical purposes, especially when dealing with differential equations in circuit analysis, engineers frequently employ complex notation. The voltage can be expressed as $v(t) = Re[V_m e^{j(\omega t + \phi_v)}] = Re[V_m e^{j\phi_v} \cdot e^{j\omega t}]$, where the actual physical voltage corresponds to the real component of this complex expression. This formulation significantly simplifies mathematical operations in linear circuit analysis.

Several measurement parameters characterize AC signals. In terms of amplitude, we distinguish between the peak value ($V_m$, $I_m$), representing the maximum excursion from zero; the peak-to-peak value ($V_{pp} = 2V_m$, $I_{pp} = 2I_m$), measuring the entire range of the waveform; and the root-mean-square (RMS) value, which equates to $V_{rms} = V_m/\sqrt{2} = 0.707V_m$ for sinusoidal waveforms. The RMS value holds particular significance as it represents the equivalent DC value that would dissipate the same average power in a resistive load.

Time-domain parameters include the period $T = 1/f = 2\pi/\omega$, representing the duration of one complete cycle; frequency $f$, measuring cycles per second; angular frequency $\omega = 2\pi f$, describing the rate of angular displacement in radians per second; and phase angle $\phi$, indicating the angular displacement relative to a reference waveform.

## Phasor Analysis

The technique of phasor analysis transforms time-domain sinusoidal functions into complex frequency-domain representations, converting the differential equations of circuit analysis into more manageable algebraic equations. For a time-domain signal $v(t) = V_m \sin(\omega t + \phi)$, the corresponding phasor representation becomes $\bar{V} = V_m \angle \phi = V_m e^{j\phi} = V_m(\cos\phi + j\sin\phi)$. This transformation applies exclusively to linear systems operating at a single frequency.

![Phasor Animation](/content/images/electromagnetism/ac-circuits/phasor_animation.svg)
*Figure 2: Interactive animation demonstrating the relationship between phasor representation in the complex plane and the corresponding time-domain sinusoidal signal, illustrating how a rotating phasor generates a sine wave.*

Phasor diagrams provide graphical representations of complex voltage and current relationships, with magnitude proportional to signal amplitude and angular position indicating phase. Counterclockwise rotation on these diagrams represents positive phase shift. The mathematical operations in phasor domain include addition/subtraction following complex number rules, scalar multiplication, and the important operations of differentiation (which transforms to multiplication by $j\omega$) and integration (which transforms to division by $j\omega$).

## AC Circuit Elements

Resistive, inductive, and capacitive elements each exhibit distinctive behavior in AC circuits. For a resistor, voltage and current remain in phase ($\phi_v = \phi_i$), with Ohm's Law applying directly in phasor form: $\bar{V} = \bar{I}R$. The instantaneous power in a resistor follows $p(t) = v(t)i(t) = V_m I_m \sin^2(\omega t) = \frac{V_m I_m}{2}[1-\cos(2\omega t)]$, yielding an average power of $P_{avg} = V_{rms}I_{rms}$.

In an inductor, current lags voltage by 90° ($\phi_i = \phi_v - 90°$) due to the relationship $v(t) = L\frac{di(t)}{dt}$. This behavior introduces the concept of inductive reactance $X_L = \omega L$, measured in ohms, yielding an impedance of $\bar{Z}_L = j\omega L = jX_L$. The voltage-current relationship in phasor form becomes $\bar{V} = \bar{I}j\omega L$. While instantaneous power fluctuates according to $p(t) = v(t)i(t) = V_m I_m \sin(\omega t)\sin(\omega t - 90°)$, the average power in an ideal inductor equals zero as energy continuously cycles between the magnetic field and the circuit.

For a capacitor, current leads voltage by 90° ($\phi_i = \phi_v + 90°$) according to $i(t) = C\frac{dv(t)}{dt}$. The capacitive reactance $X_C = \frac{1}{\omega C}$ yields an impedance of $\bar{Z}_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C} = -jX_C$. The voltage-current relationship becomes $\bar{V} = \bar{I}(-j\frac{1}{\omega C})$. Similar to inductors, ideal capacitors dissipate zero average power, with energy cycling between the electric field and the circuit.

## Impedance and Admittance

Impedance represents the generalized concept of opposition to current flow in AC circuits, combining resistance and reactance in a complex quantity $\bar{Z} = R + jX = |\bar{Z}|\angle\theta_Z$. The magnitude $|\bar{Z}| = \sqrt{R^2 + X^2}$ represents the ratio of voltage and current amplitudes, while the phase angle $\theta_Z = \tan^{-1}(\frac{X}{R})$ indicates the phase difference between voltage and current.

![RLC Impedance Animation](/content/images/electromagnetism/ac-circuits/rlc_impedance.svg)
*Figure 3: Interactive animation showing the behavior of a series RLC circuit, illustrating the relationship between impedance components, frequency, and the resulting phase difference between voltage and current. The frequency slider allows exploration of circuit behavior at different frequencies, including resonance.*

Admittance, the reciprocal of impedance, facilitates analysis of parallel circuits and is expressed as $\bar{Y} = \frac{1}{\bar{Z}} = G + jB = |\bar{Y}|\angle\theta_Y$. The real component $G = \frac{R}{R^2 + X^2}$ represents conductance, while the imaginary component $B = \frac{-X}{R^2 + X^2}$ constitutes susceptance. The admittance magnitude $|\bar{Y}| = \sqrt{G^2 + B^2}$ equals the ratio of current to voltage amplitudes, and the angle $\theta_Y = \tan^{-1}(\frac{B}{G})$ indicates the phase lead of current relative to voltage.

## Power in AC Circuits

Power analysis in AC circuits requires distinguishing between several forms of power. Instantaneous power, given by $p(t) = v(t)i(t)$, fluctuates with time. Complex power $\bar{S} = \bar{V}\bar{I}^* = P + jQ$, measured in volt-amperes (VA), combines active and reactive components. The apparent power $S = |\bar{S}| = V_{rms}I_{rms}$ represents the product of RMS voltage and current magnitudes. Active power $P = Re[\bar{S}] = V_{rms}I_{rms}\cos\phi$, measured in watts (W), represents the average rate of energy conversion. Reactive power $Q = Im[\bar{S}] = V_{rms}I_{rms}\sin\phi$, measured in volt-amperes reactive (VAR), represents the rate of energy exchange between the source and reactive elements.

![Power Triangle Animation](/content/images/electromagnetism/ac-circuits/power_triangle.svg)
*Figure 4: Interactive animation illustrating the power triangle concept and power factor correction. The slider allows adjustment of capacitive compensation to observe how reducing reactive power improves power factor while maintaining the same active power, resulting in reduced apparent power and better energy efficiency.*

The power factor $pf = \cos\phi = \frac{P}{S} = \frac{R}{|\bar{Z}|}$ indicates the ratio of active power to apparent power, with $\phi$ representing the phase difference between voltage and current. A unity power factor ($\phi = 0°$) indicates a purely resistive load. A leading power factor ($\phi < 0°$) denotes a predominantly capacitive load, while a lagging power factor ($\phi > 0°$) indicates a predominantly inductive load.

The power triangle provides a geometric representation of the relationship between active, reactive, and apparent power. With active power on the horizontal axis, reactive power on the vertical axis, and apparent power as the hypotenuse, this triangle illustrates the relationship $S = \sqrt{P^2 + Q^2}$.

## Frequency Response and Resonance

The behavior of reactive components varies with frequency, with inductive reactance $X_L = \omega L$ increasing proportionally with frequency, while capacitive reactance $X_C = \frac{1}{\omega C}$ decreases inversely with frequency. This frequency-dependent behavior forms the basis for filtering and frequency-selective circuits.

Resonance occurs when inductive and capacitive reactances become equal, satisfying the condition $X_L = X_C$ or equivalently $\omega L = \frac{1}{\omega C}$. Solving for frequency yields the resonant frequency $\omega_0 = \frac{1}{\sqrt{LC}}$. At resonance, the imaginary component of impedance vanishes, voltage and current align in phase, impedance reaches its minimum in parallel resonant circuits (creating maximum current), and impedance reaches its maximum in series resonant circuits (creating minimum current).

## Practical Applications and Measurement Techniques

AC generation fundamentally relies on electromagnetic induction, where a time-varying magnetic field induces voltage according to Faraday's law: $\mathcal{E} = -N\frac{d\Phi}{dt}$. In practical generators, mechanical rotation of conductors through magnetic fields or rotation of magnetic fields past stationary conductors creates this time-varying flux. Three-phase systems, comprising three identical AC sources offset by 120°, offer advantages including constant power transfer and more efficient motor operation.

Measurement of AC quantities employs various instruments, each serving specific purposes. Oscilloscopes display waveform shape, amplitude, frequency, and phase relationships. Digital multimeters measure RMS values of voltage and current. Power analyzers determine active, reactive, and apparent power components. Spectrum analyzers reveal the frequency composition of complex signals.

AC technology finds application across numerous domains. Power distribution systems leverage the transformability of AC for efficient long-distance transmission. Motor drives employ frequency variation for speed control. Signal processing utilizes AC principles for filtering, amplification, and modulation. Communications systems exploit AC for signal encoding and transmission across various media.

## Example Problems with Solutions

To illustrate the application of these principles, consider a series RLC circuit with R = 100 Ω, L = 50 mH, and C = 10 μF connected to a 120 V (rms), 60 Hz source. The inductive reactance equals $X_L = \omega L = 2\pi \times 60 \times 0.05 = 18.85 \, \Omega$, while the capacitive reactance equals $X_C = \frac{1}{\omega C} = \frac{1}{2\pi \times 60 \times 10 \times 10^{-6}} = 265.26 \, \Omega$. The total impedance becomes $\bar{Z} = R + j(X_L - X_C) = 100 - j246.41 = 265.74 \angle -67.9° \, \Omega$. The current magnitude equals $I_{rms} = \frac{V_{rms}}{|\bar{Z}|} = \frac{120}{265.74} = 0.452 \, A$ with phasor representation $\bar{I} = 0.452 \angle 67.9° \, A$. The power factor equals $pf = \cos\phi = \cos(-67.9°) = 0.376$ leading, resulting in active power $P = V_{rms}I_{rms}\cos\phi = 120 \times 0.452 \times 0.376 = 20.4 \, W$ and reactive power $Q = V_{rms}I_{rms}\sin\phi = 120 \times 0.452 \times 0.927 = 50.3 \, VAR$ (capacitive).

For a parallel RLC circuit with R = 1 kΩ, L = 100 mH, and C = 0.1 μF connected to a 50 V (rms), 1 kHz source, the analysis proceeds through admittance. The conductance equals $G = \frac{1}{R} = \frac{1}{1000} = 0.001 \, S$. The inductive susceptance equals $B_L = \frac{1}{X_L} = \frac{1}{2\pi \times 1000 \times 0.1} = 1.59 \times 10^{-3} \, S$, while the capacitive susceptance equals $B_C = \frac{1}{X_C} = 2\pi \times 1000 \times 0.1 \times 10^{-6} = 6.28 \times 10^{-4} \, S$. The total admittance becomes $\bar{Y} = G + j(B_C - B_L) = 0.001 - j9.62 \times 10^{-4} = 1.39 \times 10^{-3} \angle -43.9° \, S$. The current magnitude equals $I_{rms} = V_{rms} \times |\bar{Y}| = 50 \times 1.39 \times 10^{-3} = 0.0695 \, A$ with a phase angle of $\phi = -43.9°$ (current leads voltage).

## Questions And Answers

1. **Question:** An AC voltage source with amplitude 220 V and frequency 50 Hz supplies power to a 40 Ω resistor connected in series with a 0.2 H inductor. Calculate the power factor of the circuit and the average power consumed.

   **Answer:** The inductive reactance is $X_L = \omega L = 2\pi \times 50 \times 0.2 = 62.8$ Ω. The impedance is $Z = \sqrt{R^2 + X_L^2} = \sqrt{40^2 + 62.8^2} = 74.5$ Ω with phase angle $\phi = \tan^{-1}(X_L/R) = \tan^{-1}(62.8/40) = 57.5°$. The power factor is $\cos\phi = \cos(57.5°) = 0.537$ (lagging). The RMS voltage is $V_{rms} = 220/\sqrt{2} = 155.6$ V. The average power consumed is $P = V_{rms}^2 \times \cos\phi / Z = 155.6^2 \times 0.537 / 74.5 = 170.4$ W.

2. **Question:** A power transmission line delivers 10 MW at 100 kV with a power factor of 0.8 lagging. What capacitance should be connected in parallel to correct the power factor to 0.95 lagging?

   **Answer:** For the initial conditions, apparent power $S_1 = P/\cos\phi_1 = 10 \times 10^6/0.8 = 12.5$ MVA. Initial reactive power $Q_1 = S_1\sin\phi_1 = 12.5 \times 10^6 \times \sin(\cos^{-1}0.8) = 7.5$ MVAR (inductive). For the desired power factor, new reactive power $Q_2 = P\tan(\cos^{-1}0.95) = 10 \times 10^6 \times \tan(\cos^{-1}0.95) = 3.29$ MVAR. The capacitive reactive power needed is $Q_C = Q_1 - Q_2 = 7.5 - 3.29 = 4.21$ MVAR. The required capacitance is $C = Q_C/(\omega V_{rms}^2) = 4.21 \times 10^6/(2\pi \times 50 \times (100 \times 10^3)^2) = 134.1$ μF.

3. **Question:** An electrical engineer needs to design a series RLC circuit with a resonant frequency of 1 kHz and a quality factor (Q) of 50. If R = 10 Ω, determine the values of L and C required.

   **Answer:** The quality factor of a series RLC circuit is $Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 RC}$. For resonance, $\omega_0 = 2\pi f_0 = 2\pi \times 1000 = 6283.2$ rad/s. Since $Q = \frac{\omega_0 L}{R} = 50$, we have $L = \frac{QR}{\omega_0} = \frac{50 \times 10}{6283.2} = 79.6$ mH. At resonance, $\omega_0^2 = \frac{1}{LC}$, so $C = \frac{1}{\omega_0^2 L} = \frac{1}{6283.2^2 \times 79.6 \times 10^{-3}} = 318$ nF.

4. **Question:** A voltmeter with a sensitivity of 1000 Ω/V is used on its 150 V range to measure the voltage across a 100 kΩ resistor in an AC circuit. If the true voltage is 120 V (RMS), what will the voltmeter read? Explain the loading effect.

   **Answer:** The internal resistance of the voltmeter on the 150 V range is $R_v = 1000 \times 150 = 150$ kΩ. When connected across the 100 kΩ resistor, the voltmeter forms a parallel resistance of $R_{eq} = \frac{R_v \times 100k}{R_v + 100k} = \frac{150k \times 100k}{150k + 100k} = 60$ kΩ. The voltage divider created by this loading effect causes the voltmeter to read $V_{read} = 120 \times \frac{60k}{100k} = 72$ V. This demonstrates how measuring instruments can significantly affect the circuit being measured when their impedance is not sufficiently high compared to the circuit impedance.

5. **Question:** A 230 V (RMS), 50 Hz single-phase motor draws 10 A at a power factor of 0.75 lagging. Calculate the apparent power, active power, reactive power, and the correction capacitor needed to bring the power factor to unity.

   **Answer:** Apparent power $S = V_{rms} \times I_{rms} = 230 \times 10 = 2300$ VA. Active power $P = S \times \cos\phi = 2300 \times 0.75 = 1725$ W. Reactive power $Q = S \times \sin\phi = 2300 \times \sin(\cos^{-1}0.75) = 1725$ VAR. For unity power factor, the capacitive reactive power must equal the inductive reactive power. Therefore, $Q_C = Q = 1725$ VAR. The capacitance required is $C = \frac{Q_C}{\omega V_{rms}^2} = \frac{1725}{2\pi \times 50 \times 230^2} = 103.7$ μF.

6. **Question:** In a transformer substation, the power factor is 0.7 lagging at a voltage of 11 kV. If the load is 5 MVA, determine the active and reactive components of the current, and calculate the voltage regulation if the transformer impedance is (0.02 + j0.08) Ω.

   **Answer:** The active power is $P = S \times \cos\phi = 5 \times 10^6 \times 0.7 = 3.5$ MW. The reactive power is $Q = S \times \sin\phi = 5 \times 10^6 \times \sin(\cos^{-1}0.7) = 3.57$ MVAR. The total current is $I = \frac{S}{V} = \frac{5 \times 10^6}{11 \times 10^3} = 454.5$ A. The active component is $I_a = I \times \cos\phi = 454.5 \times 0.7 = 318.2$ A. The reactive component is $I_r = I \times \sin\phi = 454.5 \times \sin(\cos^{-1}0.7) = 324.1$ A. The voltage drop across the transformer impedance is $\Delta V = I \times Z = 454.5 \times \sqrt{0.02^2 + 0.08^2} = 454.5 \times 0.082 = 37.3$ V with angle $\theta_Z = \tan^{-1}(0.08/0.02) = 76°$. The voltage regulation is $\frac{\Delta V}{V_{rated}} \times 100\% = \frac{37.3}{11000} \times 100\% = 0.34\%$.

7. **Question:** A three-phase, 440 V, 60 Hz induction motor has the following equivalent circuit parameters per phase: $R_1 = 0.5$ Ω, $X_1 = 1.5$ Ω, $R_2' = 0.4$ Ω, and $X_2' = 0.8$ Ω. Calculate the starting current and starting power factor.

   **Answer:** At startup, the slip s = 1, so the total impedance per phase is $Z = (R_1 + R_2') + j(X_1 + X_2') = (0.5 + 0.4) + j(1.5 + 0.8) = 0.9 + j2.3$. The magnitude is $|Z| = \sqrt{0.9^2 + 2.3^2} = 2.47$ Ω. The phase voltage is $V_{ph} = 440/\sqrt{3} = 254$ V. The starting current is $I_{start} = \frac{V_{ph}}{|Z|} = \frac{254}{2.47} = 102.8$ A. The phase angle is $\phi = \tan^{-1}(2.3/0.9) = 68.6°$. The starting power factor is $\cos\phi = \cos(68.6°) = 0.364$ lagging.

8. **Question:** An oscilloscope displays a waveform described by the equation $v(t) = 50\sin(1000t) + 20\sin(3000t + \pi/4)$ V. Describe the frequency spectrum and calculate the RMS value of this waveform.

   **Answer:** The waveform consists of two sinusoidal components: a fundamental at frequency $f_1 = \frac{\omega_1}{2\pi} = \frac{1000}{2\pi} = 159.2$ Hz with amplitude 50 V, and a third harmonic at frequency $f_3 = 3f_1 = 477.5$ Hz with amplitude 20 V and phase shift of $\pi/4$ radians. The frequency spectrum would show two discrete spikes at these frequencies with heights proportional to the amplitudes. The RMS value is calculated as $V_{rms} = \sqrt{\frac{V_1^2}{2} + \frac{V_3^2}{2}} = \sqrt{\frac{50^2}{2} + \frac{20^2}{2}} = \sqrt{1250 + 200} = \sqrt{1450} = 38.1$ V. This follows from the property that the total RMS value of uncorrelated sinusoidal components is the square root of the sum of squares of individual RMS values.

9. **Question:** A resonant LC circuit used in a radio receiver has L = 100 μH and C = 100 pF. What is the resonant frequency? If this circuit has a resistance of 10 Ω, determine the bandwidth and quality factor.

   **Answer:** The resonant frequency is $f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{100 \times 10^{-6} \times 100 \times 10^{-12}}} = \frac{1}{2\pi \times 10^{-6}} = 1.59$ MHz. The quality factor is $Q = \frac{\omega_0 L}{R} = \frac{2\pi \times 1.59 \times 10^6 \times 100 \times 10^{-6}}{10} = 100$. The bandwidth is $BW = \frac{f_0}{Q} = \frac{1.59 \times 10^6}{100} = 15.9$ kHz. This high Q-factor indicates a very selective circuit with a narrow bandwidth, which is desirable in radio receivers for tuning to specific stations.

10. **Question:** A voltage phasor $\bar{V} = 100\angle30°$ V is applied across an impedance $\bar{Z} = 50\angle-45°$ Ω. Determine the current phasor, complex power, active power, reactive power, and draw the power triangle.

    **Answer:** The current phasor is $\bar{I} = \frac{\bar{V}}{\bar{Z}} = \frac{100\angle30°}{50\angle-45°} = 2\angle75°$ A. The complex power is $\bar{S} = \bar{V}\bar{I}^* = 100\angle30° \times 2\angle-75° = 200\angle-45°$ VA = (141.4 - j141.4) VA. This means the active power P = 141.4 W and the reactive power Q = -141.4 VAR (capacitive). The power triangle would show a right triangle with P = 141.4 W on the horizontal axis, Q = -141.4 VAR directed downward on the vertical axis (indicating capacitive reactive power), and S = 200 VA as the hypotenuse. The power factor is $\cos(-45°) = 0.707$ leading.

## Summary

The study of alternating current encompasses the mathematical representation of sinusoidal quantities, the behavior of fundamental circuit elements, the concepts of impedance and admittance, power relationships, and frequency-dependent phenomena including resonance. These principles form the foundation for analyzing more complex AC circuits and systems, from power distribution networks to communication systems. Mastery of these concepts enables the analysis and design of electrical and electronic systems across numerous domains of engineering and physics.
