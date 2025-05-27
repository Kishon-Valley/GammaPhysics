# Transient Analysis in DC Circuits

## Introduction

Transient analysis examines the behavior of electrical circuits during the transition between steady states, typically following a sudden change such as switching, component failure, or source variation. While steady-state analysis provides insights into long-term circuit behavior, transient analysis reveals critical information about a circuit's dynamic response, including overshoot, rise time, settling time, and stability. This document explores the fundamental principles, mathematical techniques, and practical applications of transient analysis in DC circuits containing energy storage elements—capacitors and inductors.

## Energy Storage Elements

### Capacitors

Capacitors store energy in an electric field formed between two conductive plates separated by a dielectric material. The fundamental relationships governing capacitor behavior are:

![Capacitor](/images/electromagnetism/dc-circuits/capacitor.svg)

$i_C = C\frac{dv_C}{dt}$

$v_C = \frac{1}{C}\int i_C\,dt + v_C(0)$

Where $i_C$ is the current through the capacitor, $v_C$ is the voltage across the capacitor, $C$ is the capacitance in farads, and $v_C(0)$ is the initial voltage.

The energy stored in a capacitor is:

$E_C = \frac{1}{2}CV^2$

In DC steady state, capacitors act as open circuits, blocking direct current while maintaining a constant voltage.

### Inductors

Inductors store energy in a magnetic field created by current flowing through a coil of wire. The fundamental relationships governing inductor behavior are:

![Inductor](/images/electromagnetism/dc-circuits/inductor.svg)

$v_L = L\frac{di_L}{dt}$

$i_L = \frac{1}{L}\int v_L\,dt + i_L(0)$

Where $v_L$ is the voltage across the inductor, $i_L$ is the current through the inductor, $L$ is the inductance in henries, and $i_L(0)$ is the initial current.

The energy stored in an inductor is:

$E_L = \frac{1}{2}LI^2$

In DC steady state, inductors act as short circuits, allowing direct current to flow while maintaining zero voltage drop.

## First-Order Circuits

First-order circuits contain one energy storage element (either a capacitor or an inductor) and any number of resistors and sources. Their behavior is described by a first-order differential equation, resulting in an exponential response to step inputs.

### RC Circuits

An RC circuit consists of a resistor and capacitor, typically analyzed during charging or discharging processes.

#### Charging RC Circuit

Consider a series RC circuit with a DC voltage source V connected at time t = 0. The differential equation describing the capacitor voltage is:

$RC\frac{dv_C}{dt} + v_C = V$

This equation has the solution:

$v_C(t) = V(1 - e^{-t/\tau}) + v_C(0)e^{-t/\tau}$

Where $\tau = RC$ is the time constant of the circuit, representing the time required for the response to reach approximately 63.2% of its final value.

The current through the circuit is:

$i(t) = \frac{V - v_C(0)}{R}e^{-t/\tau}$

![RC Circuit](/images/electromagnetism/dc-circuits/rc-circuit.svg)

#### Discharging RC Circuit

For a capacitor discharging through a resistor (no source), the solution becomes:

$v_C(t) = v_C(0)e^{-t/\tau}$

$i(t) = -\frac{v_C(0)}{R}e^{-t/\tau}$

The negative sign indicates that the current flows in the opposite direction compared to the charging process.

### RL Circuits

An RL circuit consists of a resistor and inductor, analyzed during energizing or de-energizing processes.

#### Energizing RL Circuit

Consider a series RL circuit with a DC voltage source V connected at time t = 0. The differential equation describing the inductor current is:

$L\frac{di_L}{dt} + Ri_L = V$

This equation has the solution:

$i_L(t) = \frac{V}{R}(1 - e^{-t/\tau}) + i_L(0)e^{-t/\tau}$

Where $\tau = L/R$ is the time constant of the circuit.

The voltage across the inductor is:

$v_L(t) = Ve^{-t/\tau} - Ri_L(0)e^{-t/\tau}$

![RL Circuit](/images/electromagnetism/dc-circuits/rl-circuit.svg)

#### De-energizing RL Circuit

For an inductor de-energizing through a resistor (no source), the solution becomes:

$i_L(t) = i_L(0)e^{-t/\tau}$

$v_L(t) = -Ri_L(0)e^{-t/\tau}$

### Time Constant Analysis

The time constant τ provides valuable insights into circuit behavior:

- At t = τ, the response reaches approximately 63.2% of its final value
- At t = 2τ, the response reaches approximately 86.5% of its final value
- At t = 3τ, the response reaches approximately 95.0% of its final value
- At t = 4τ, the response reaches approximately 98.2% of its final value
- At t = 5τ, the response reaches approximately 99.3% of its final value

For practical purposes, a circuit is considered to have reached steady state after 5 time constants, with the transient component reduced to less than 1% of its initial value.

## Second-Order Circuits

Second-order circuits contain two energy storage elements (typically one capacitor and one inductor) and any number of resistors and sources. Their behavior is described by a second-order differential equation, resulting in more complex responses that can include oscillations.

### RLC Circuits

An RLC circuit consists of a resistor, inductor, and capacitor. The differential equation describing a series RLC circuit with a DC voltage source V connected at time t = 0 is:

![RLC Circuit](/images/electromagnetism/dc-circuits/rlc-circuit.svg)

$L\frac{d^2i}{dt^2} + R\frac{di}{dt} + \frac{1}{C}i = 0$

The solution to this equation depends on the relative values of R, L, and C, which determine the damping factor:

$\alpha = \frac{R}{2L}$

$\omega_0 = \frac{1}{\sqrt{LC}}$

Where α is the damping coefficient and ω₀ is the natural frequency of the circuit.

### Response Types in RLC Circuits

The behavior of an RLC circuit falls into one of three categories based on the damping ratio ζ = α/ω₀:

#### Overdamped Response (ζ > 1)

When R² > 4L/C, the circuit is overdamped, and the solution has the form:

$i(t) = A_1e^{s_1t} + A_2e^{s_2t}$

Where s₁ and s₂ are distinct negative real roots of the characteristic equation:

$s_{1,2} = -\alpha \pm \sqrt{\alpha^2 - \omega_0^2}$

The overdamped response exhibits no oscillation and approaches steady state relatively slowly.

#### Critically Damped Response (ζ = 1)

When R² = 4L/C, the circuit is critically damped, and the solution has the form:

$i(t) = (A_1 + A_2t)e^{-\alpha t}$

The critically damped response represents the boundary between oscillatory and non-oscillatory behavior, reaching steady state in the minimum time without oscillation.

#### Underdamped Response (ζ < 1)

When R² < 4L/C, the circuit is underdamped, and the solution has the form:

$i(t) = e^{-\alpha t}(A_1\cos(\omega_d t) + A_2\sin(\omega_d t))$

Where ωd is the damped natural frequency:

$\omega_d = \sqrt{\omega_0^2 - \alpha^2}$

The underdamped response exhibits decaying oscillations around the steady-state value.

## Laplace Transform Method

The Laplace transform provides a powerful technique for solving transient circuit problems by converting differential equations in the time domain to algebraic equations in the frequency domain.

### Basic Principles

The Laplace transform of a function f(t) is defined as:

$F(s) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} f(t)e^{-st}dt$

Where s is a complex frequency variable.

Key Laplace transform pairs relevant to circuit analysis include:

- Unit step function: $\mathcal{L}\{u(t)\} = \frac{1}{s}$
- Exponential function: $\mathcal{L}\{e^{-at}\} = \frac{1}{s+a}$
- Sinusoidal function: $\mathcal{L}\{\sin(\omega t)\} = \frac{\omega}{s^2 + \omega^2}$

### Circuit Element Transforms

In the s-domain:

- Resistor: $V(s) = RI(s)$
- Capacitor: $V(s) = \frac{1}{sC}I(s) + \frac{v_C(0)}{s}$
- Inductor: $V(s) = sLI(s) - Li_L(0)$

These relationships allow circuit analysis using familiar techniques such as Ohm's Law and Kirchhoff's Laws in the s-domain.

### Solving Transient Problems

The general procedure for solving transient problems using Laplace transforms is:

1. Transform the circuit to the s-domain, replacing components with their s-domain equivalents
2. Apply circuit analysis techniques to find the s-domain response
3. Use partial fraction expansion to decompose the s-domain expression
4. Apply inverse Laplace transform to obtain the time-domain solution

### Transfer Functions

The transfer function H(s) of a circuit is the ratio of the output to input in the s-domain:

$H(s) = \frac{Y(s)}{X(s)}$

Where Y(s) is the output and X(s) is the input.

For a second-order system, the standard form of the transfer function is:

$H(s) = \frac{\omega_0^2}{s^2 + 2\zeta\omega_0s + \omega_0^2}$

Where ζ is the damping ratio and ω₀ is the natural frequency.

## Initial and Final Value Theorems

The initial and final value theorems provide shortcuts for determining the behavior of a system at t = 0⁺ and t = ∞ without performing a complete inverse Laplace transform.

### Initial Value Theorem

The initial value theorem states:

$\lim_{t \to 0^+} f(t) = \lim_{s \to \infty} sF(s)$

This theorem is useful for determining the immediate response of a circuit following a switching event.

### Final Value Theorem

The final value theorem states:

$\lim_{t \to \infty} f(t) = \lim_{s \to 0} sF(s)$

This theorem is useful for determining the steady-state response of a circuit, provided all poles of sF(s) have negative real parts (ensuring stability).

## Practical Applications

### Switching Circuits

Transient analysis is essential for understanding the behavior of switching circuits, such as those found in power supplies, motor drives, and digital systems. Key considerations include:

- Turn-on and turn-off delays
- Voltage and current overshoots
- Switching losses
- Ringing and oscillations

### Timing Circuits

RC and RL circuits form the basis for various timing applications:

- RC timing circuits in oscillators and pulse generators
- Delay lines for signal processing
- Integrators and differentiators
- Phase-shift networks

### Filters

Transient analysis helps characterize the time-domain response of filters:

- Step response of low-pass, high-pass, and band-pass filters
- Settling time and overshoot specifications
- Group delay and phase distortion

### Protection Circuits

Understanding transient behavior is crucial for designing protection circuits:

- Snubber circuits to suppress voltage spikes
- Inrush current limiters
- Surge protectors
- Crowbar circuits

## Numerical Methods for Transient Analysis

For complex circuits that defy analytical solutions, numerical methods provide practical alternatives:

### Euler Method

The Euler method approximates the solution to differential equations using the recurrence relation:

$y_{n+1} = y_n + hf(t_n, y_n)$

Where h is the step size and f(t, y) is the derivative function.

### Runge-Kutta Methods

Runge-Kutta methods provide higher accuracy by evaluating the derivative at multiple points:

Fourth-order Runge-Kutta (RK4):

$k_1 = hf(t_n, y_n)$
$k_2 = hf(t_n + \frac{h}{2}, y_n + \frac{k_1}{2})$
$k_3 = hf(t_n + \frac{h}{2}, y_n + \frac{k_2}{2})$
$k_4 = hf(t_n + h, y_n + k_3)$
$y_{n+1} = y_n + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$

### SPICE Simulation

Circuit simulation tools like SPICE (Simulation Program with Integrated Circuit Emphasis) use sophisticated numerical algorithms to analyze transient behavior in complex circuits. SPICE simulations can account for:

- Non-linear component behavior
- Temperature effects
- Component tolerances
- Parasitic elements

## Questions and Answers

### Question 1: RC Circuit Step Response
A series RC circuit consists of a 10kΩ resistor and a 4.7μF capacitor. If a 12V DC source is suddenly applied to the circuit at t = 0, with the capacitor initially uncharged, determine:
a) The time constant of the circuit
b) The mathematical expression for the capacitor voltage
c) The time required for the capacitor to charge to 99% of the final value
d) The energy stored in the capacitor at steady state

**Answer:**
a) The time constant is:
$\tau = RC = 10\text{k}\Omega \times 4.7\mu\text{F} = 47\text{ ms}$

b) The capacitor voltage is:
$v_C(t) = V(1 - e^{-t/\tau}) = 12\text{V}(1 - e^{-t/47\text{ms}})$

c) For 99% of the final value:
$0.99 \times 12\text{V} = 12\text{V}(1 - e^{-t/47\text{ms}})$
$0.99 = 1 - e^{-t/47\text{ms}}$
$e^{-t/47\text{ms}} = 0.01$
$-t/47\text{ms} = \ln(0.01) = -4.605$
$t = 4.605 \times 47\text{ms} = 216.4\text{ ms}$

d) The energy stored at steady state is:
$E = \frac{1}{2}CV^2 = \frac{1}{2} \times 4.7\mu\text{F} \times (12\text{V})^2 = 0.338\text{ mJ}$

### Question 2: RL Circuit Natural Response
An inductor with L = 50mH and initial current of 2A is connected across a 25Ω resistor at t = 0. Determine:
a) The time constant of the circuit
b) The mathematical expression for the current through the inductor
c) The time at which the current reduces to 0.5A
d) The energy dissipated in the resistor during the complete transient

**Answer:**
a) The time constant is:
$\tau = \frac{L}{R} = \frac{50\text{mH}}{25\Omega} = 2\text{ ms}$

b) The inductor current is:
$i_L(t) = i_L(0)e^{-t/\tau} = 2\text{A}e^{-t/2\text{ms}}$

c) For a current of 0.5A:
$0.5\text{A} = 2\text{A}e^{-t/2\text{ms}}$
$0.25 = e^{-t/2\text{ms}}$
$-t/2\text{ms} = \ln(0.25) = -1.386$
$t = 1.386 \times 2\text{ms} = 2.77\text{ ms}$

d) The energy dissipated in the resistor is equal to the initial energy stored in the inductor:
$E = \frac{1}{2}LI^2 = \frac{1}{2} \times 50\text{mH} \times (2\text{A})^2 = 0.1\text{ J}$

### Question 3: RLC Circuit Analysis
A series RLC circuit consists of a 100Ω resistor, a 50mH inductor, and a 2μF capacitor. The circuit is connected to a 10V DC source at t = 0, with zero initial conditions. Determine:
a) Whether the circuit is overdamped, critically damped, or underdamped
b) The natural frequency and damping ratio
c) The mathematical expression for the current
d) The maximum current and when it occurs

**Answer:**
a) To determine the damping condition:
$\alpha = \frac{R}{2L} = \frac{100\Omega}{2 \times 50\text{mH}} = 1000\text{ s}^{-1}$
$\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{50\text{mH} \times 2\mu\text{F}}} = 10000\text{ rad/s}$
$\alpha^2 = 1000^2 = 1 \times 10^6$
$\omega_0^2 = 10000^2 = 1 \times 10^8$

Since $\alpha^2 < \omega_0^2$, the circuit is underdamped.

b) The natural frequency is $\omega_0 = 10000\text{ rad/s}$
The damping ratio is $\zeta = \frac{\alpha}{\omega_0} = \frac{1000}{10000} = 0.1$

c) The damped frequency is:
$\omega_d = \sqrt{\omega_0^2 - \alpha^2} = \sqrt{1 \times 10^8 - 1 \times 10^6} = 9950\text{ rad/s}$

The current expression for an underdamped circuit is:
$i(t) = \frac{V}{L\omega_d}e^{-\alpha t}\sin(\omega_d t)$
$i(t) = \frac{10\text{V}}{50\text{mH} \times 9950\text{ rad/s}}e^{-1000t}\sin(9950t)$
$i(t) = 0.201\text{A} \times e^{-1000t}\sin(9950t)$

d) The maximum current occurs when the derivative of the envelope function equals the derivative of the sinusoidal function. For an underdamped circuit with low damping, this occurs approximately at:
$t_{max} \approx \frac{\pi}{2\omega_d} = \frac{\pi}{2 \times 9950} = 0.158\text{ ms}$

The maximum current is:
$i_{max} = 0.201\text{A} \times e^{-1000 \times 0.158\text{ms}} = 0.201\text{A} \times 0.854 = 0.172\text{A}$

### Question 4: Laplace Transform Application
Use the Laplace transform method to analyze a series RC circuit with R = 5kΩ and C = 2μF. The circuit is connected to a 10V DC source at t = 0, with the capacitor initially uncharged. Determine:
a) The s-domain expression for the capacitor voltage
b) The time-domain expression for the capacitor voltage
c) The s-domain expression for the circuit current
d) The time-domain expression for the circuit current

**Answer:**
a) In the s-domain, the circuit can be represented as a voltage source V(s) = 10/s (Laplace transform of a 10V step function) in series with a resistor R and a capacitor with impedance 1/(sC).

Applying voltage division in the s-domain:
$V_C(s) = \frac{1/(sC)}{R + 1/(sC)} \times \frac{10}{s} = \frac{10}{s} \times \frac{1}{1 + sRC}$
$V_C(s) = \frac{10}{s(1 + sRC)} = \frac{10}{s(1 + s \times 5\text{k}\Omega \times 2\mu\text{F})} = \frac{10}{s(1 + 0.01s)}$

Factoring the denominator:
$V_C(s) = \frac{10}{s \times 0.01 \times (s + 100)} = \frac{1000}{s(s + 100)}$

Using partial fraction expansion:
$V_C(s) = \frac{A}{s} + \frac{B}{s + 100}$

Solving for constants A and B:
At s = 0: $A = \frac{1000}{100} = 10$
At s = -100: $B = \frac{1000}{-100} = -10$

Therefore:
$V_C(s) = \frac{10}{s} - \frac{10}{s + 100}$

b) Taking the inverse Laplace transform:
$v_C(t) = 10(1 - e^{-100t})$ V

c) The s-domain current is:
$I(s) = \frac{V(s) - V_C(s)}{R} = \frac{10/s - V_C(s)}{5\text{k}\Omega}$
$I(s) = \frac{1}{5\text{k}\Omega} \times (\frac{10}{s} - \frac{10}{s} + \frac{10}{s + 100})$
$I(s) = \frac{10}{5\text{k}\Omega} \times \frac{1}{s + 100} = \frac{2 \times 10^{-3}}{s + 100}$

d) Taking the inverse Laplace transform:
$i(t) = 2 \times 10^{-3} \times e^{-100t}$ A

This confirms that the current starts at 2mA (= 10V/5kΩ) and decays exponentially with time constant τ = RC = 10ms.

### Question 5: Initial and Final Value Theorems
A circuit has a transfer function $H(s) = \frac{10s}{(s+1)(s+10)}$. If the input is a unit step function, use the initial and final value theorems to determine:
a) The initial value of the output at t = 0+
b) The final value of the output as t approaches infinity
c) Verify these results by finding the complete time-domain expression for the output

**Answer:**
a) The s-domain output for a unit step input is:
$Y(s) = H(s) \times \frac{1}{s} = \frac{10s}{s(s+1)(s+10)}$

Using the initial value theorem:
$y(0^+) = \lim_{s \to \infty} s \times Y(s) = \lim_{s \to \infty} \frac{10s^2}{s(s+1)(s+10)}$

As s approaches infinity, this becomes:
$y(0^+) = \lim_{s \to \infty} \frac{10s}{(s+1)(s+10)}$

As s approaches infinity, this becomes:
$y(0^+) = \lim_{s \to \infty} \frac{10s}{s^2} = 0$

b) Using the final value theorem:
$y(\infty) = \lim_{s \to 0} s \times Y(s) = \lim_{s \to 0} \frac{10s^2}{s(s+1)(s+10)}$

As s approaches zero, this becomes:
$y(\infty) = \frac{10 \times 0}{(0+1)(0+10)} = 0$

c) To find the complete time-domain expression, we first perform partial fraction expansion of Y(s):
$Y(s) = \frac{10s}{s(s+1)(s+10)} = \frac{A}{s} + \frac{B}{s+1} + \frac{C}{s+10}$

Solving for the constants:
At s = 0: $A = \frac{10 \times 0}{(0+1)(0+10)} = 0$
At s = -1: $B = \frac{10 \times (-1)}{(-1)((-1)+10)} = \frac{-10}{-1 \times 9} = \frac{10}{9}$
At s = -10: $C = \frac{10 \times (-10)}{(-10)((-10)+1)} = \frac{-100}{-10 \times (-9)} = \frac{-100}{90} = -\frac{10}{9}$

Therefore:
$Y(s) = \frac{10}{9} \times \frac{1}{s+1} - \frac{10}{9} \times \frac{1}{s+10}$

Taking the inverse Laplace transform:
$y(t) = \frac{10}{9}(e^{-t} - e^{-10t})$

Verifying our earlier results:
At t = 0: $y(0) = \frac{10}{9}(1 - 1) = 0$
As t approaches infinity: $y(\infty) = \frac{10}{9}(0 - 0) = 0$

These match our results from the initial and final value theorems.

### Question 6: Critically Damped RLC Circuit
A series RLC circuit has R = 200Ω, L = 0.5H, and C = 5μF. The circuit is connected to a 24V DC source at t = 0, with zero initial conditions. Determine:
a) Whether the circuit is critically damped
b) If not critically damped, what value of R would make it critically damped?
c) For the critically damped case, find the expression for the current
d) How long does it take for the current to reach its maximum value in the critically damped case?

**Answer:**
a) To determine if the circuit is critically damped, we calculate:
$\alpha = \frac{R}{2L} = \frac{200\Omega}{2 \times 0.5\text{H}} = 200\text{ s}^{-1}$
$\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.5\text{H} \times 5\mu\text{F}}} = \frac{1}{\sqrt{2.5 \times 10^{-6}}} = 632.5\text{ rad/s}$

For critical damping, we need $\alpha = \omega_0$, but here $\alpha = 200 < \omega_0 = 632.5$, so the circuit is underdamped.

b) For critical damping, we need R such that:
$\frac{R}{2L} = \frac{1}{\sqrt{LC}}$
$R = 2L \times \frac{1}{\sqrt{LC}} = 2L \times \sqrt{\frac{1}{LC}} = 2 \times \sqrt{\frac{L}{C}}$
$R = 2 \times \sqrt{\frac{0.5\text{H}}{5\mu\text{F}}} = 2 \times \sqrt{10^5} = 2 \times 316.2 = 632.5\Omega$

c) For the critically damped case (R = 632.5Ω), the current expression is:
$i(t) = \frac{V}{L} \times t \times e^{-\alpha t}$
$i(t) = \frac{24\text{V}}{0.5\text{H}} \times t \times e^{-632.5t}$
$i(t) = 48 \times t \times e^{-632.5t}$ A

d) To find when the current reaches its maximum value, we differentiate and set equal to zero:
$\frac{di}{dt} = 48 \times e^{-632.5t} - 48 \times 632.5 \times t \times e^{-632.5t} = 0$
$48 \times e^{-632.5t}(1 - 632.5t) = 0$

Solving for t:
$1 - 632.5t = 0$
$t = \frac{1}{632.5} = 1.58\text{ ms}$

The maximum current occurs at t = 1.58ms.

### Question 7: Parallel RLC Circuit
A parallel RLC circuit consists of a 20kΩ resistor, a 10mH inductor, and a 0.1μF capacitor. The circuit has an initial voltage of 5V across the capacitor and no initial current through the inductor. Determine:
a) The natural frequency and damping ratio of the circuit
b) The characteristic equation and its roots
c) The complete expression for the capacitor voltage
d) The time required for the voltage to decay to 10% of its initial value

**Answer:**
a) For a parallel RLC circuit:
$\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{10\text{mH} \times 0.1\mu\text{F}}} = \frac{1}{\sqrt{10^{-9}}} = 31,623\text{ rad/s}$

$\alpha = \frac{1}{2RC} = \frac{1}{2 \times 20\text{k}\Omega \times 0.1\mu\text{F}} = \frac{1}{4 \times 10^{-3}} = 250\text{ s}^{-1}$

The damping ratio is:
$\zeta = \frac{\alpha}{\omega_0} = \frac{250}{31,623} = 0.0079$

Since $\zeta < 1$, the circuit is underdamped.

b) The characteristic equation for a parallel RLC circuit is:
$s^2 + \frac{1}{RC}s + \frac{1}{LC} = 0$
$s^2 + 500s + 10^9 = 0$

The roots are:
$s_{1,2} = -\alpha \pm j\omega_d = -250 \pm j\sqrt{10^9 - 250^2} = -250 \pm j31,622$

c) For an underdamped parallel RLC circuit with initial voltage V₀ and no initial current, the capacitor voltage is:
$v_C(t) = V_0e^{-\alpha t}\cos(\omega_d t)$
$v_C(t) = 5e^{-250t}\cos(31,622t)$ V

d) For the voltage to decay to 10% of its initial value:
$0.1 \times 5\text{V} = 5e^{-250t}\cos(\omega_d t)$
$0.1 = e^{-250t}\cos(\omega_d t)$

Since the cosine term oscillates between -1 and 1, we'll consider the envelope of the decay:
$0.1 = e^{-250t}$
$\ln(0.1) = -250t$
$t = \frac{-\ln(0.1)}{250} = \frac{2.303}{250} = 9.21\text{ ms}$

This is the minimum time required, assuming the cosine term is at its maximum value of 1. The actual time might be slightly longer depending on the phase of the oscillation.

### Question 8: Transient Analysis with SPICE
A circuit designer wants to use SPICE to analyze the transient response of a switching power supply filter. The filter consists of a 100μH inductor in series with a parallel combination of a 470μF capacitor and a 10Ω resistor. The input is a 12V square wave with a 50% duty cycle and a frequency of 50kHz. Explain:
a) How to set up the SPICE simulation for this analysis
b) What transient analysis parameters should be specified
c) What key performance metrics should be extracted from the results
d) How component tolerances might affect the results

**Answer:**
a) To set up the SPICE simulation:

1. Create a netlist defining the circuit topology:
   ```
   * Switching Power Supply Filter Analysis
   V1 1 0 PULSE(0 12 0 1n 1n 10u 20u) ; 50kHz square wave, 50% duty cycle
   L1 1 2 100u
   C1 2 0 470u
   R1 2 0 10
   ```

2. Include component models with parasitic elements for more accurate results:
   ```
   .MODEL L1 IND (L=100u RS=0.1 PARALLEL=1k)
   .MODEL C1 CAP (C=470u RS=0.05 PARALLEL=100k)
   ```

b) Appropriate transient analysis parameters:
   ```
   .TRAN 0.1u 500u 0 0.1u
   ```
   This specifies:
   - Maximum time step: 0.1μs (sufficient to capture the 50kHz switching)
   - Stop time: 500μs (approximately 25 switching cycles)
   - Start time: 0
   - Data storage time step: 0.1μs

c) Key performance metrics to extract:

1. Output voltage ripple: Measured as the peak-to-peak variation in the steady-state output voltage
   ```
   .MEAS TRAN V_RIPPLE PP V(2) FROM 300u TO 500u
   ```

2. Settling time: Time required for the output to reach and stay within a specified tolerance band (e.g., 5%) of its final value
   ```
   .MEAS TRAN T_SETTLE WHEN V(2)>11.4 CROSS=1
   ```

3. Output voltage average: The DC component of the output
   ```
   .MEAS TRAN V_AVG AVG V(2) FROM 300u TO 500u
   ```

4. Inductor current ripple: Important for ensuring the inductor doesn't saturate
   ```
   .MEAS TRAN I_RIPPLE PP I(L1) FROM 300u TO 500u
   ```

d) Component tolerance effects:

1. Inductor tolerance (typically ±20%): Variations affect the filter's cutoff frequency and ripple current. Lower inductance values lead to higher ripple.

2. Capacitor tolerance (typically ±20%): Variations affect output ripple voltage and transient response. Lower capacitance values increase ripple and reduce filtering effectiveness.

3. ESR (Equivalent Series Resistance) variations: Higher ESR in the capacitor increases ripple voltage and can cause additional power losses.

4. Temperature effects: Component values can drift with temperature, affecting performance over operating conditions.

To account for these variations, Monte Carlo analysis can be performed:
   ```
   .PARAM L_VAL=100u TOL_L=0.2
   .PARAM C_VAL=470u TOL_C=0.2
   L1 1 2 {L_VAL*(1+TOL_L*GAUSS())}
   C1 2 0 {C_VAL*(1+TOL_C*GAUSS())}
   .MC 100 TRAN V_RIPPLE PP V(2) FROM 300u TO 500u
   ```

This would run 100 simulations with randomly varied component values to assess the design's robustness.

### Question 9: Step Response of a Low-Pass Filter
A low-pass RC filter has R = 2.2kΩ and C = 0.1μF. The filter is subjected to a 5V step input at t = 0. Determine:
a) The transfer function H(s) of the filter
b) The cutoff frequency in Hz
c) The step response in the time domain
d) The time required for the output to reach 90% of its final value

**Answer:**
a) The transfer function of a low-pass RC filter is:
$H(s) = \frac{V_{out}(s)}{V_{in}(s)} = \frac{1/sC}{R + 1/sC} = \frac{1}{1 + sRC}$

Substituting the component values:
$H(s) = \frac{1}{1 + s \times 2.2\text{k}\Omega \times 0.1\mu\text{F}} = \frac{1}{1 + 2.2 \times 10^{-4}s}$

b) The cutoff frequency is:
$f_c = \frac{1}{2\pi RC} = \frac{1}{2\pi \times 2.2\text{k}\Omega \times 0.1\mu\text{F}} = \frac{1}{2\pi \times 2.2 \times 10^{-4}} = 723.4\text{ Hz}$

c) For a step input of 5V, the s-domain output is:
$V_{out}(s) = V_{in}(s) \times H(s) = \frac{5}{s} \times \frac{1}{1 + 2.2 \times 10^{-4}s}$

Rearranging:
$V_{out}(s) = \frac{5}{s} \times \frac{1}{1 + 2.2 \times 10^{-4}s}$

Let $\tau = RC = 2.2\text{k}\Omega \times 0.1\mu\text{F} = 2.2 \times 10^{-4}\text{ s} = 0.22\text{ ms}$

Then:
$V_{out}(s) = \frac{5}{s} \times \frac{1}{1 + \tau s} = \frac{5}{s} - \frac{5}{s} \times \frac{\tau s}{1 + \tau s} = \frac{5}{s} - \frac{5\tau s}{s(1 + \tau s)} = \frac{5}{s} - \frac{5\tau}{1 + \tau s}$

Taking the inverse Laplace transform:
$v_{out}(t) = 5(1 - e^{-t/\tau}) = 5(1 - e^{-t/0.22\text{ms}})$ V

d) For the output to reach 90% of its final value:
$v_{out}(t) = 0.9 \times 5\text{V} = 4.5\text{V}$
$5(1 - e^{-t/0.22\text{ms}}) = 4.5$
$1 - e^{-t/0.22\text{ms}} = 0.9$
$e^{-t/0.22\text{ms}} = 0.1$
$-t/0.22\text{ms} = \ln(0.1) = -2.303$
$t = 2.303 \times 0.22\text{ms} = 0.507\text{ ms}$

Therefore, the output reaches 90% of its final value after 0.507 ms.

### Question 10: Runge-Kutta Method for Transient Analysis
A non-linear circuit is described by the differential equation $\frac{dv}{dt} + 5v + 2v^2 = 10\sin(2\pi t)$ with initial condition v(0) = 0. Use the fourth-order Runge-Kutta method to approximate v(0.2) with a step size of h = 0.1. Show all steps in the calculation.

**Answer:**
The fourth-order Runge-Kutta method for solving a first-order differential equation $\frac{dy}{dt} = f(t, y)$ uses the following formulas:

$k_1 = hf(t_n, y_n)$
$k_2 = hf(t_n + \frac{h}{2}, y_n + \frac{k_1}{2})$
$k_3 = hf(t_n + \frac{h}{2}, y_n + \frac{k_2}{2})$
$k_4 = hf(t_n + h, y_n + k_3)$
$y_{n+1} = y_n + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$

For our differential equation, we can rearrange to get:
$\frac{dv}{dt} = 10\sin(2\pi t) - 5v - 2v^2 = f(t, v)$

Starting with v(0) = 0 and using h = 0.1, we'll compute v(0.1) and then v(0.2).

Step 1: Calculate v(0.1) from v(0)

$k_1 = h \times f(0, 0) = 0.1 \times (10\sin(0) - 5 \times 0 - 2 \times 0^2) = 0$

$k_2 = h \times f(0 + 0.05, 0 + 0/2) = 0.1 \times f(0.05, 0)$
$k_2 = 0.1 \times (10\sin(2\pi \times 0.05) - 5 \times 0 - 2 \times 0^2) = 0.1 \times 10\sin(0.314) = 0.1 \times 3.09 = 0.309$

$k_3 = h \times f(0 + 0.05, 0 + 0.309/2) = 0.1 \times f(0.05, 0.1545)$
$k_3 = 0.1 \times (10\sin(0.314) - 5 \times 0.1545 - 2 \times 0.1545^2)$
$k_3 = 0.1 \times (3.09 - 0.7725 - 0.0477) = 0.1 \times 2.27 = 0.227$

$k_4 = h \times f(0 + 0.1, 0 + 0.227) = 0.1 \times f(0.1, 0.227)$
$k_4 = 0.1 \times (10\sin(2\pi \times 0.1) - 5 \times 0.227 - 2 \times 0.227^2)$
$k_4 = 0.1 \times (5.88 - 1.135 - 0.103) = 0.1 \times 4.642 = 0.464$

$v(0.1) = v(0) + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$
$v(0.1) = 0 + \frac{1}{6}(0 + 2 \times 0.309 + 2 \times 0.227 + 0.464)$
$v(0.1) = \frac{1}{6}(0.618 + 0.454 + 0.464) = \frac{1.536}{6} = 0.256$

Step 2: Calculate v(0.2) from v(0.1)

$k_1 = h \times f(0.1, 0.256) = 0.1 \times (10\sin(2\pi \times 0.1) - 5 \times 0.256 - 2 \times 0.256^2)$
$k_1 = 0.1 \times (5.88 - 1.28 - 0.131) = 0.1 \times 4.469 = 0.447$

$k_2 = h \times f(0.1 + 0.05, 0.256 + 0.447/2) = 0.1 \times f(0.15, 0.4795)$
$k_2 = 0.1 \times (10\sin(2\pi \times 0.15) - 5 \times 0.4795 - 2 \times 0.4795^2)$
$k_2 = 0.1 \times (8.09 - 2.3975 - 0.46) = 0.1 \times 5.2325 = 0.523$

$k_3 = h \times f(0.15, 0.256 + 0.523/2) = 0.1 \times f(0.15, 0.5175)$
$k_3 = 0.1 \times (8.09 - 5 \times 0.5175 - 2 \times 0.5175^2)$
$k_3 = 0.1 \times (8.09 - 2.5875 - 0.536) = 0.1 \times 4.9665 = 0.497$

$k_4 = h \times f(0.2, 0.256 + 0.497) = 0.1 \times f(0.2, 0.753)$
$k_4 = 0.1 \times (10\sin(2\pi \times 0.2) - 5 \times 0.753 - 2 \times 0.753^2)$
$k_4 = 0.1 \times (9.51 - 3.765 - 1.135) = 0.1 \times 4.61 = 0.461$

$v(0.2) = v(0.1) + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$
$v(0.2) = 0.256 + \frac{1}{6}(0.447 + 2 \times 0.523 + 2 \times 0.497 + 0.461)$
$v(0.2) = 0.256 + \frac{1}{6}(0.447 + 1.046 + 0.994 + 0.461)$
$v(0.2) = 0.256 + \frac{2.948}{6} = 0.256 + 0.491 = 0.747$

Therefore, using the fourth-order Runge-Kutta method with a step size of h = 0.1, we approximate v(0.2) ≈ 0.747.

## Summary

Transient analysis provides essential insights into the dynamic behavior of electrical circuits containing energy storage elements. First-order circuits (RC and RL) exhibit exponential responses characterized by their time constants, while second-order circuits (RLC) display more complex behavior that can include oscillations. The Laplace transform method offers a powerful analytical approach for solving transient problems by converting differential equations to algebraic equations. Understanding transient behavior is crucial for designing switching circuits, timing applications, filters, and protection systems. For complex circuits, numerical methods and simulation tools provide practical alternatives to analytical solutions. Mastery of transient analysis equips engineers to predict and control the dynamic response of electrical systems, ensuring reliable operation across diverse applications.
