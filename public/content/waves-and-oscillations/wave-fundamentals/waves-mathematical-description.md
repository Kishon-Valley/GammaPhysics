## Mathematical Description of Waves: The Wave Equation and Its Solutions

## Introduction to the Wave Equation

The wave equation is a second-order partial differential equation that describes the propagation of waves through space and time. It is fundamental to understanding wave behavior in various physical systems, including mechanical waves (e.g., sound, water waves) and electromagnetic waves (e.g., light, radio waves). The wave equation provides a mathematical framework for predicting wave motion, energy transfer, and interference phenomena.

## The Wave Equation

### General Form
The one-dimensional wave equation for a wave function $y(x,t)$ is given by:

$$
\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}
$$

where:
- $y(x,t)$ is the displacement of the wave at position $x$ and time $t$
- $v$ is the wave speed
- $\frac{\partial^2 y}{\partial t^2}$ is the second time derivative (acceleration)
- $\frac{\partial^2 y}{\partial x^2}$ is the second spatial derivative (curvature)

This equation states that the acceleration of the wave at any point is proportional to its curvature at that point.

### Derivation
For a transverse wave on a string under tension $T$, the wave equation can be derived using Newton's second law. The restoring force due to tension is balanced by the inertial force of the string's mass:

$$
\begin{aligned}
T \frac{\partial^2 y}{\partial x^2} &= \mu \frac{\partial^2 y}{\partial t^2} \\[1ex]
\frac{\partial^2 y}{\partial t^2} &= \frac{T}{\mu} \frac{\partial^2 y}{\partial x^2}
\end{aligned}
$$

where $\mu$ is the linear mass density of the string. The wave speed $v$ is then:

$$
v = \sqrt{\frac{T}{\mu}}
$$

## Solutions to the Wave Equation

### General Solution
The general solution to the one-dimensional wave equation is a superposition of two traveling waves:

$$
y(x,t) = f(x - vt) + g(x + vt)
$$

where:
- $f(x - vt)$ represents a wave traveling in the $+x$ direction
- $g(x + vt)$ represents a wave traveling in the $-x$ direction

These functions $f$ and $g$ are determined by the initial conditions of the system.

### Sinusoidal Wave Solution
A specific and widely used solution is the sinusoidal wave:

$$
y(x,t) = A \sin(kx - \omega t + \phi)
$$

where:
- $A$ is the amplitude
- $k = \frac{2\pi}{\lambda}$ is the wave number
- $\omega = 2\pi f$ is the angular frequency
- $\phi$ is the phase constant

### Complex Exponential Form
For mathematical convenience, the sinusoidal wave can be expressed in complex exponential form:

$$
\begin{aligned}
y(x,t) &= A e^{i(kx - \omega t + \phi)} \\[1ex]
\text{Re}[y(x,t)] &= A \cos(kx - \omega t + \phi)
\end{aligned}
$$

## Boundary Conditions and Specific Solutions

### Fixed Ends (Standing Waves)
For a string fixed at both ends (e.g., a guitar string), the boundary conditions are:

$$
y(0,t) = 0 \quad \text{and} \quad y(L,t) = 0
$$

where $L$ is the length of the string. These conditions lead to standing wave solutions:

$$
y(x,t) = 2A \sin(kx) \cos(\omega t)
$$

The allowed wave numbers $k$ are quantized:

$$
k_n = \frac{n\pi}{L} \quad \text{for} \quad n = 1, 2, 3, \dots
$$

This results in discrete frequencies (harmonics):

$$
f_n = \frac{nv}{2L}
$$

### Free Ends
For a string with free ends, the boundary conditions require zero curvature at the ends:

$$
\left.\frac{\partial y}{\partial x}\right|_{x=0} = 0 \quad \text{and} \quad \left.\frac{\partial y}{\partial x}\right|_{x=L} = 0
$$

## Energy and Power in Wave Solutions

### Energy Density
The total energy density (energy per unit length) of a wave on a string is:

$$
E_{\text{total}} = \frac{1}{2} \mu \left(\frac{\partial y}{\partial t}\right)^2 + \frac{1}{2} T \left(\frac{\partial y}{\partial x}\right)^2
$$

For a sinusoidal wave, the average energy density is:

$$
E_{\text{avg}} = \frac{1}{2} \mu \omega^2 A^2
$$

### Power Transmission
The power transmitted by a wave is:

$$
P = \frac{1}{2} \mu \omega^2 A^2 v
$$

## Practical Questions and Answers

### Question 1: Wave Parameters
A wave on a string is described by the equation:

$$
y(x,t) = 0.05 \sin(10x - 40t) \text{ m}
$$

Find the amplitude, wavelength, frequency, and wave speed.

**Solution:**

1. **Amplitude:**
   $$
   A = 0.05 \text{ m}
   $$

2. **Wave Number:**
   $$
   \begin{aligned}
   k &= 10 \text{ rad/m} \\[1ex]
   \lambda &= \frac{2\pi}{k} = \frac{2\pi}{10} = 0.63 \text{ m}
   \end{aligned}
   $$

3. **Angular Frequency:**
   $$
   \begin{aligned}
   \omega &= 40 \text{ rad/s} \\[1ex]
   f &= \frac{\omega}{2\pi} = \frac{40}{2\pi} \approx 6.37 \text{ Hz}
   \end{aligned}
   $$

4. **Wave Speed:**
   $$
   v = \frac{\omega}{k} = \frac{40}{10} = 4 \text{ m/s}
   $$

### Question 2: String Harmonics
A string of length $2 \text{ m}$ and mass $0.1 \text{ kg}$ is fixed at both ends. If the tension in the string is $50 \text{ N}$, find the frequencies of the first three harmonics.

**Solution:**

1. **Linear Mass Density:**
   $$
   \begin{aligned}
   \mu &= \frac{m}{L} \\[1ex]
   &= \frac{0.1 \text{ kg}}{2 \text{ m}} = 0.05 \text{ kg/m}
   \end{aligned}
   $$

2. **Wave Speed:**
   $$
   \begin{aligned}
   v &= \sqrt{\frac{T}{\mu}} \\[1ex]
   &= \sqrt{\frac{50}{0.05}} = \sqrt{1000} \approx 31.62 \text{ m/s}
   \end{aligned}
   $$

3. **Harmonic Frequencies:**
   Using $f_n = \frac{nv}{2L}$ for $n = 1, 2, 3$:
   
   First harmonic ($n=1$):
   $$
   f_1 = \frac{1 \times 31.62}{2 \times 2} = 7.91 \text{ Hz}
   $$
   
   Second harmonic ($n=2$):
   $$
   f_2 = \frac{2 \times 31.62}{2 \times 2} = 15.82 \text{ Hz}
   $$
   
   Third harmonic ($n=3$):
   $$
   f_3 = \frac{3 \times 31.62}{2 \times 2} = 23.73 \text{ Hz}
   $$

**Key Points:**
- Wave equations describe the motion of waves in various media
- Solutions can be traveling waves or standing waves
- Energy and power depend on amplitude, frequency, and wave speed
- Boundary conditions determine the allowed frequencies in confined systems