## WKB Approximation

### Introduction

The WKB (Wentzel-Kramers-Brillouin) approximation is a semiclassical method for finding approximate solutions to linear differential equations with spatially varying coefficients. In quantum mechanics, it provides a way to solve the Schrödinger equation in regions where the potential energy varies slowly compared to the wavelength of the particle.

## Theoretical Foundation

### Semiclassical Approach

The WKB approximation bridges quantum and classical mechanics by treating quantum particles as approximately following classical trajectories while accounting for quantum effects through phase factors.

For a one-dimensional time-independent Schrödinger equation:

$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)$$

We seek solutions in the form:

$$\psi(x) = A(x)e^{iS(x)/\hbar}$$

Where $S(x)$ is a function related to the classical action and $A(x)$ is a slowly varying amplitude.

### Derivation

Substituting this ansatz into the Schrödinger equation and collecting terms by powers of $\hbar$, we get:

Order $\hbar^0$:
$$\frac{1}{2m}\left(\frac{dS}{dx}\right)^2 + V(x) = E$$

Order $\hbar^1$:
$$\frac{1}{m}\frac{dS}{dx}\frac{dA}{dx} + \frac{1}{2m}A\frac{d^2S}{dx^2} = 0$$

The first equation gives:
$$\frac{dS}{dx} = \pm\sqrt{2m(E-V(x))} = \pm p(x)$$

Where $p(x)$ is the classical momentum. Integrating:
$$S(x) = \pm\int^x \sqrt{2m(E-V(x'))}dx'$$

The second equation gives:
$$A(x) = \frac{C}{\sqrt{|p(x)|}}$$

Where $C$ is a normalization constant.

### WKB Wavefunction

The WKB approximation gives the wavefunction in classically allowed regions ($E > V(x)$):

$$\psi(x) \approx \frac{C}{\sqrt{p(x)}}\exp\left(\pm\frac{i}{\hbar}\int^x p(x')dx'\right)$$

And in classically forbidden regions ($E < V(x)$):

$$\psi(x) \approx \frac{C}{\sqrt{|p(x)|}}\exp\left(\pm\frac{1}{\hbar}\int^x |p(x')|dx'\right)$$

## Connection Formulas

### Matching at Classical Turning Points

The WKB approximation breaks down at classical turning points where $E = V(x)$ and $p(x) = 0$. To connect solutions across these points, we use connection formulas.

For a turning point at $x = a$ with $V(x) < E$ for $x > a$ and $V(x) > E$ for $x < a$:

$$\frac{1}{\sqrt{p(x)}}\cos\left(\frac{1}{\hbar}\int_a^x p(x')dx' - \frac{\pi}{4}\right) \leftrightarrow \frac{1}{2\sqrt{|p(x)|}}\exp\left(-\frac{1}{\hbar}\int_x^a |p(x')|dx'\right)$$

### Bohr-Sommerfeld Quantization

For bound states in a potential well with classical turning points $a$ and $b$, the WKB approximation leads to the Bohr-Sommerfeld quantization condition:

$$\int_a^b p(x)dx = \left(n + \frac{1}{2}\right)\pi\hbar, \quad n = 0, 1, 2, ...$$

This provides a method to determine the allowed energy levels without solving the Schrödinger equation directly.

## Applications

### Harmonic Oscillator

For a harmonic oscillator with potential $V(x) = \frac{1}{2}m\omega^2 x^2$, the classical turning points for energy $E$ are at $x = \pm\sqrt{2E/m\omega^2}$.

The Bohr-Sommerfeld quantization gives:

$$\int_{-\sqrt{2E/m\omega^2}}^{\sqrt{2E/m\omega^2}} \sqrt{2m\left(E - \frac{1}{2}m\omega^2 x^2\right)}dx = \left(n + \frac{1}{2}\right)\pi\hbar$$

Evaluating this integral:

$$E_n = \hbar\omega\left(n + \frac{1}{2}\right)$$

This exactly matches the known quantum mechanical result, showing that the WKB approximation is exact for the harmonic oscillator.

### Potential Barrier - Tunneling

For a particle with energy $E$ incident on a potential barrier $V(x)$ where $E < V(x)$ in the barrier region $[a,b]$, the WKB approximation gives the transmission probability:

$$T \approx \exp\left(-\frac{2}{\hbar}\int_a^b \sqrt{2m(V(x) - E)}dx\right)$$

This formula captures the essential physics of quantum tunneling, showing that the transmission probability decreases exponentially with the barrier width and height.

### Potential Well - Bound States

For a particle in a potential well, the WKB approximation provides approximate energy levels through the Bohr-Sommerfeld quantization condition.

For a finite square well of width $2a$ and depth $V_0$, the energy levels are approximately given by:

$$\int_{-a}^a \sqrt{2m(E + V_0)}dx = \left(n + \frac{1}{2}\right)\pi\hbar$$

Simplifying:

$$E_n \approx \frac{\pi^2\hbar^2}{8ma^2}\left(n + \frac{1}{2}\right)^2 - V_0$$

## Accuracy and Limitations

### Validity Conditions

The WKB approximation is valid when:

$$\left|\frac{d\lambda}{dx}\right| \ll 1$$

Where $\lambda = \frac{h}{p(x)}$ is the local de Broglie wavelength. This condition can be rewritten as:

$$\left|\frac{1}{p(x)}\frac{dp(x)}{dx}\right| \ll \frac{p(x)}{\hbar}$$

This means the potential must vary slowly compared to the wavelength of the particle.

### Higher-Order Corrections

The accuracy of the WKB approximation can be improved by including higher-order terms in the expansion. The full WKB series is:

$$S(x) = S_0(x) + \hbar S_1(x) + \hbar^2 S_2(x) + ...$$

Where $S_0(x) = \int p(x)dx$ is the classical action, and $S_1, S_2, ...$ are higher-order quantum corrections.

### Comparison with Other Methods

The WKB approximation complements other approximation methods:
- Unlike perturbation theory, it does not require a small parameter in the Hamiltonian
- Unlike the variational method, it provides information about the wavefunction's oscillatory behavior
- It is particularly effective for high quantum numbers (semiclassical limit)

## Practice Problems

### Problem 1: Particle in a Power-Law Potential

**Question:** Consider a particle in a one-dimensional potential $V(x) = V_0|x|^k$, where $k > 0$. Use the WKB approximation to find the energy eigenvalues for large quantum numbers.

**Answer:** The classical turning points for energy $E$ are at $x = \pm(E/V_0)^{1/k}$.

Applying the Bohr-Sommerfeld quantization condition:

$$\int_{-(E/V_0)^{1/k}}^{(E/V_0)^{1/k}} \sqrt{2m(E - V_0|x|^k)}dx = \left(n + \frac{1}{2}\right)\pi\hbar$$

Making the substitution $x = (E/V_0)^{1/k}y$:

$$2(E/V_0)^{1/k}\int_0^1 \sqrt{2mE(1 - y^k)}dy = \left(n + \frac{1}{2}\right)\pi\hbar$$

The integral evaluates to:

$$\int_0^1 \sqrt{1 - y^k}dy = \frac{\sqrt{\pi}\Gamma(1 + 1/k)}{k\Gamma(1/2 + 1/k)}$$

Solving for $E$:

$$E_n = \left[\frac{\left(n + \frac{1}{2}\right)\pi\hbar}{2\sqrt{2m}}\frac{k\Gamma(1/2 + 1/k)}{\sqrt{\pi}\Gamma(1 + 1/k)}\right]^{\frac{2k}{k+2}}V_0^{\frac{2}{k+2}}$$

For $k = 2$ (harmonic oscillator), this gives $E_n = \hbar\omega(n + 1/2)$, matching the exact result.

### Problem 2: Tunneling Through a Square Barrier

**Question:** A particle with energy $E$ is incident on a square potential barrier of height $V_0 > E$ and width $a$. Calculate the transmission probability using the WKB approximation and compare it with the exact quantum mechanical result.

**Answer:** Using the WKB tunneling formula:

$$T_{WKB} \approx \exp\left(-\frac{2}{\hbar}\int_0^a \sqrt{2m(V_0 - E)}dx\right)$$

Since the potential is constant in the barrier region, the integral simplifies to:

$$T_{WKB} \approx \exp\left(-\frac{2a}{\hbar}\sqrt{2m(V_0 - E)}\right)$$

The exact quantum mechanical result for a square barrier is:

$$T_{exact} = \left[1 + \frac{V_0^2\sinh^2(ka)}{4E(V_0-E)}\right]^{-1}$$

Where $k = \sqrt{2m(V_0-E)}/\hbar$.

For $ka \gg 1$ (thick barrier), the exact result approaches:

$$T_{exact} \approx 16\frac{E(V_0-E)}{V_0^2}e^{-2ka}$$

Comparing with the WKB result:

$$\frac{T_{exact}}{T_{WKB}} \approx 16\frac{E(V_0-E)}{V_0^2}$$

The WKB approximation captures the exponential dependence correctly but misses the pre-exponential factor.

### Problem 3: Linear Potential

**Question:** A particle is in a linear potential $V(x) = Fx$ for $x > 0$ and $V(x) = \infty$ for $x \leq 0$, where $F > 0$ is a constant force. Use the WKB approximation to find the energy eigenvalues.

**Answer:** For a given energy $E$, the classical turning points are at $x = 0$ (due to the infinite wall) and $x = E/F$.

Applying the Bohr-Sommerfeld quantization:

$$\int_0^{E/F} \sqrt{2m(E - Fx)}dx = \left(n + \frac{1}{2}\right)\pi\hbar$$

Evaluating the integral:

$$\frac{2}{3}\frac{\sqrt{2m}E^{3/2}}{F} = \left(n + \frac{1}{2}\right)\pi\hbar$$

Solving for $E$:

$$E_n = \left[\frac{3\pi F\hbar}{2\sqrt{2m}}\left(n + \frac{1}{2}\right)\right]^{2/3}$$

This can be compared with the exact result from the Airy function solution:

$$E_n^{exact} = \left[\frac{3\pi F\hbar}{2\sqrt{2m}}\left(n + \frac{3}{4}\right)\right]^{2/3}$$

The WKB approximation is quite accurate, differing only in the constant term inside the parentheses.

### Problem 4: Morse Potential

**Question:** The Morse potential $V(x) = D(e^{-2\alpha(x-x_0)} - 2e^{-\alpha(x-x_0)})$ models the vibrational energy of diatomic molecules. Use the WKB approximation to find the energy levels and compare with the exact result.

**Answer:** The Morse potential has a minimum value of $-D$ at $x = x_0$ and approaches zero as $x \to \infty$. For energies $-D < E < 0$, there are two classical turning points.

Applying the Bohr-Sommerfeld quantization:

$$\int_{x_1}^{x_2} \sqrt{2m(E - D(e^{-2\alpha(x-x_0)} - 2e^{-\alpha(x-x_0)}))}dx = \left(n + \frac{1}{2}\right)\pi\hbar$$

After a change of variables and evaluation of the integral:

$$E_n = -D + \hbar\omega_0\left(n + \frac{1}{2}\right) - \frac{\hbar^2\omega_0^2}{4D}\left(n + \frac{1}{2}\right)^2$$

Where $\omega_0 = \alpha\sqrt{2D/m}$ is the classical oscillation frequency near the minimum.

The exact quantum mechanical result is:

$$E_n^{exact} = -D + \hbar\omega_0\left(n + \frac{1}{2}\right) - \frac{\hbar^2\omega_0^2}{4D}\left(n + \frac{1}{2}\right)^2$$

The WKB approximation gives the exact result for the Morse potential, which is a remarkable feature of this potential.

### Problem 5: Reflection Above a Potential Step

**Question:** A particle with energy $E$ is incident from the left on a potential step: $V(x) = 0$ for $x < 0$ and $V(x) = V_0 < E$ for $x > 0$. Use the WKB approximation to estimate the reflection coefficient.

**Answer:** The WKB approximation generally works well for slowly varying potentials but not for discontinuous potentials like a step. However, we can approximate the step by a smooth function $V(x) = V_0/(1 + e^{-\lambda x})$ and take the limit $\lambda \to \infty$.

For a smooth potential, the reflection coefficient is approximately:

$$R \approx \exp\left(-2\pi\frac{(p_1 - p_2)^2}{|\frac{dV}{dx}|_{x=0}}\right)$$

Where $p_1 = \sqrt{2mE}$ and $p_2 = \sqrt{2m(E-V_0)}$ are the momenta in the two regions.

As $\lambda \to \infty$, $|\frac{dV}{dx}|_{x=0} \to \infty$, giving $R \to 0$. This contradicts the exact quantum result:

$$R_{exact} = \left(\frac{p_1 - p_2}{p_1 + p_2}\right)^2$$

This illustrates a limitation of the WKB method for abrupt potential changes.

### Problem 6: Anharmonic Oscillator

**Question:** Consider an anharmonic oscillator with potential $V(x) = \frac{1}{2}m\omega^2 x^2 + \lambda x^4$, where $\lambda > 0$ is small. Use the WKB approximation to find the first-order correction to the energy levels due to the anharmonic term.

**Answer:** For small $\lambda$, the classical turning points are approximately at $x = \pm\sqrt{2E/m\omega^2}(1 - \lambda x^2/m\omega^2)$.

Applying the Bohr-Sommerfeld quantization and expanding to first order in $\lambda$:

$$\int_{-x_1}^{x_1} \sqrt{2m(E - \frac{1}{2}m\omega^2 x^2 - \lambda x^4)}dx = \left(n + \frac{1}{2}\right)\pi\hbar$$

This gives:

$$E_n = \hbar\omega\left(n + \frac{1}{2}\right) + \frac{3\lambda\hbar^2}{4m^2\omega^2}\left(n + \frac{1}{2}\right)^2 + O(\lambda^2)$$

This matches the result from first-order perturbation theory.

### Problem 7: Semiclassical Quantization in Phase Space

**Question:** Show that the Bohr-Sommerfeld quantization condition can be interpreted as quantizing the phase space area enclosed by a classical orbit.

**Answer:** The classical phase space area enclosed by an orbit with energy $E$ is:

$$A(E) = \oint p\,dx$$

Where the integral is taken over one complete period of the motion. For a bound state with turning points $a$ and $b$, this becomes:

$$A(E) = 2\int_a^b p(x)\,dx$$

The Bohr-Sommerfeld quantization condition states:

$$\int_a^b p(x)\,dx = \left(n + \frac{1}{2}\right)\pi\hbar$$

Therefore:

$$A(E_n) = 2\pi\hbar\left(n + \frac{1}{2}\right)$$

This shows that the allowed energies correspond to classical orbits that enclose phase space areas that are integer-plus-half multiples of $2\pi\hbar$. This is a manifestation of the correspondence principle and is related to the semiclassical interpretation of quantum mechanics.

## Conclusion

The WKB approximation provides a powerful semiclassical method for solving quantum mechanical problems, particularly effective when the potential varies slowly compared to the particle's wavelength. It offers physical insight by connecting quantum behavior to classical trajectories and is especially useful for calculating tunneling probabilities and energy levels in bound systems.

While it has limitations, particularly near classical turning points and for rapidly varying potentials, the WKB method remains an essential tool in the quantum physicist's toolkit. Its ability to provide analytical approximations for problems where exact solutions are unavailable makes it complementary to other approximation techniques like perturbation theory and the variational method.
