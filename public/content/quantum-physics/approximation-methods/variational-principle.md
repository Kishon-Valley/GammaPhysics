## Variational Principle

### Introduction

The variational principle is a powerful mathematical technique in quantum mechanics used to approximate the ground state energy and wavefunction of complex systems. Unlike perturbation theory, which requires a small parameter, the variational method can provide accurate approximations even for strongly interacting systems.

## Theoretical Foundation

### Basic Formulation

For any quantum system with Hamiltonian $H$, the energy expectation value for any normalized trial wavefunction $|\psi_{\text{trial}}\rangle$ is:

$$E[\psi_{\text{trial}}] = \frac{\langle\psi_{\text{trial}}|H|\psi_{\text{trial}}\rangle}{\langle\psi_{\text{trial}}|\psi_{\text{trial}}\rangle}$$

The variational principle states that this expectation value is always greater than or equal to the true ground state energy $E_0$:

$$E[\psi_{\text{trial}}] \geq E_0$$

Equality holds if and only if $|\psi_{\text{trial}}\rangle$ is the true ground state wavefunction.

### Mathematical Proof

Consider a complete set of energy eigenstates $\{|n\rangle\}$ of the Hamiltonian $H$:

$$H|n\rangle = E_n|n\rangle$$

Any trial wavefunction can be expanded in this basis:

$$|\psi_{\text{trial}}\rangle = \sum_n c_n |n\rangle$$

The energy expectation value becomes:

$$E[\psi_{\text{trial}}] = \frac{\sum_n |c_n|^2 E_n}{\sum_n |c_n|^2}$$

Since $E_n \geq E_0$ for all $n$, and $\sum_n |c_n|^2 > 0$, we have:

$$E[\psi_{\text{trial}}] = \frac{\sum_n |c_n|^2 E_n}{\sum_n |c_n|^2} \geq \frac{\sum_n |c_n|^2 E_0}{\sum_n |c_n|^2} = E_0$$

Equality holds only when $c_n = 0$ for all $n$ except $n=0$, meaning $|\psi_{\text{trial}}\rangle = |0\rangle$.

## Practical Implementation

### Linear Variational Method

In the linear variational method, we construct a trial wavefunction as a linear combination of basis functions:

$$|\psi_{\text{trial}}\rangle = \sum_{i=1}^N c_i |\phi_i\rangle$$

Where $\{|\phi_i\rangle\}$ is a set of $N$ linearly independent basis functions, and $\{c_i\}$ are variational parameters.

The energy expectation value is:

$$E[c_1, c_2, \ldots, c_N] = \frac{\sum_{i,j=1}^N c_i^* c_j \langle\phi_i|H|\phi_j\rangle}{\sum_{i,j=1}^N c_i^* c_j \langle\phi_i|\phi_j\rangle}$$

To find the optimal coefficients, we minimize this energy with respect to the coefficients, leading to the generalized eigenvalue problem:

$$\sum_{j=1}^N H_{ij} c_j = E \sum_{j=1}^N S_{ij} c_j$$

Where $H_{ij} = \langle\phi_i|H|\phi_j\rangle$ is the Hamiltonian matrix and $S_{ij} = \langle\phi_i|\phi_j\rangle$ is the overlap matrix.

### Rayleigh-Ritz Method

The Rayleigh-Ritz method is a special case of the linear variational method where the basis functions are orthonormal:

$$\langle\phi_i|\phi_j\rangle = \delta_{ij}$$

In this case, the generalized eigenvalue problem simplifies to a standard eigenvalue problem:

$$\sum_{j=1}^N H_{ij} c_j = E c_i$$

The lowest eigenvalue of the Hamiltonian matrix provides an upper bound to the ground state energy, and the corresponding eigenvector gives the best approximation to the ground state wavefunction within the chosen basis.

### Non-Linear Variational Method

In the non-linear variational method, we use a trial wavefunction with a functional form that depends on parameters in a non-linear way:

$$|\psi_{\text{trial}}(\alpha_1, \alpha_2, \ldots, \alpha_M)\rangle$$

The energy is minimized with respect to these parameters:

$$\frac{\partial E[\alpha_1, \alpha_2, \ldots, \alpha_M]}{\partial \alpha_i} = 0$$

This often requires numerical optimization techniques.

## Applications

### Helium Atom Ground State

For the helium atom, a simple trial wavefunction is:

$$\psi_{\text{trial}}(r_1, r_2) = e^{-Z_{\text{eff}}(r_1 + r_2)/a_0}$$

Where $Z_{\text{eff}}$ is an effective nuclear charge that accounts for electron-electron screening, and $a_0$ is the Bohr radius.

The energy expectation value is:

$$E[Z_{\text{eff}}] = -Z_{\text{eff}}^2 \cdot 2 \cdot \text{Ry} + \frac{5}{8}Z_{\text{eff}} \cdot \text{Ry}$$

Where Ry is the Rydberg energy. Minimizing with respect to $Z_{\text{eff}}$ gives $Z_{\text{eff}} = 27/16 = 1.6875$, resulting in $E \approx -77.5$ eV, which is within 2% of the experimental value of $-79.0$ eV.

### Hydrogen Molecule

For the hydrogen molecule, a trial wavefunction can be constructed as a linear combination of atomic orbitals (LCAO):

$$\psi_{\text{trial}}(r_1, r_2) = c_1 \phi_A(r_1) \phi_B(r_2) + c_2 \phi_B(r_1) \phi_A(r_2)$$

Where $\phi_A$ and $\phi_B$ are hydrogen atom 1s orbitals centered on nuclei A and B, respectively.

This approach correctly predicts the formation of a covalent bond and gives a reasonable approximation of the bond length and dissociation energy.

### Quantum Harmonic Oscillator with Anharmonic Perturbation

For a quantum harmonic oscillator with an anharmonic perturbation $V(x) = \lambda x^4$, a trial wavefunction can be:

$$\psi_{\text{trial}}(x) = \left(\frac{\alpha}{\pi}\right)^{1/4} e^{-\alpha x^2/2}$$

Where $\alpha$ is a variational parameter. The optimal value of $\alpha$ depends on the strength of the anharmonic term $\lambda$.

## Comparison with Perturbation Theory

### Advantages of Variational Method

1. **No small parameter requirement**: Unlike perturbation theory, the variational method does not require a small perturbation.
2. **Upper bound**: The variational method provides a rigorous upper bound to the ground state energy.
3. **Stronger interactions**: It works well for strongly interacting systems where perturbation theory fails.

### Limitations of Variational Method

1. **Ground state only**: The basic variational principle applies only to the ground state.
2. **Trial function dependence**: The accuracy depends critically on the choice of trial wavefunction.
3. **No systematic improvement**: Unlike perturbation theory, there is no systematic way to improve the approximation.

## Extensions to Excited States

### Excited State Variational Principle

For the $n$-th excited state, a generalized variational principle states that:

$$E_n \leq \frac{\langle\psi_{\text{trial}}|H|\psi_{\text{trial}}\rangle}{\langle\psi_{\text{trial}}|\psi_{\text{trial}}\rangle}$$

Provided that $\langle\psi_{\text{trial}}|\psi_i\rangle = 0$ for all $i < n$, where $\psi_i$ are the exact eigenstates.

### Linear Variational Method for Excited States

In the linear variational method, diagonalizing the Hamiltonian matrix provides approximations not only to the ground state but also to excited states. The eigenvalues, arranged in ascending order, provide upper bounds to the corresponding energy levels.

## Practice Problems

### Problem 1: Particle in a Box with Delta Function Perturbation

**Question:** Consider a particle in a one-dimensional box of length $L$ with an attractive delta function perturbation at the center: $V(x) = -\alpha\delta(x-L/2)$, where $\alpha > 0$. Using a trial wavefunction $\psi_{\text{trial}}(x) = \sqrt{2/L}\sin(\pi x/L)$ (the ground state of the unperturbed system), estimate the ground state energy.

**Answer:** The energy expectation value is:

$$E[\psi_{\text{trial}}] = \frac{\pi^2 \hbar^2}{2mL^2} - \alpha|\psi_{\text{trial}}(L/2)|^2$$

Substituting $\psi_{\text{trial}}(L/2) = \sqrt{2/L}$, we get:

$$E[\psi_{\text{trial}}] = \frac{\pi^2 \hbar^2}{2mL^2} - \frac{2\alpha}{L}$$

This is lower than the unperturbed energy, correctly showing that the attractive delta function lowers the energy.

### Problem 2: Variational Calculation for Helium-like Ions

**Question:** For a helium-like ion with nuclear charge $Z$, use the trial wavefunction $\psi_{\text{trial}}(r_1, r_2) = e^{-Z_{\text{eff}}(r_1 + r_2)/a_0}$ to find the optimal value of $Z_{\text{eff}}$ and the corresponding ground state energy.

**Answer:** The energy expectation value is:

$$E[Z_{\text{eff}}] = -Z_{\text{eff}}^2 \cdot 2 \cdot \text{Ry} \cdot \frac{Z^2}{Z_{\text{eff}}^2} + \frac{5}{8}Z_{\text{eff}} \cdot \text{Ry}$$

Simplifying:

$$E[Z_{\text{eff}}] = -2Z^2 \cdot \text{Ry} + \frac{5}{8}Z_{\text{eff}} \cdot \text{Ry}$$

Minimizing with respect to $Z_{\text{eff}}$:

$$\frac{dE}{dZ_{\text{eff}}} = \frac{5}{8} \cdot \text{Ry} = 0$$

This gives $Z_{\text{eff}} = Z - 5/16$, and the corresponding energy:

$$E = -2Z^2 \cdot \text{Ry} + \frac{5}{8}(Z - 5/16) \cdot \text{Ry} = -(2Z^2 - \frac{5Z}{8} + \frac{25}{128}) \cdot \text{Ry}$$

For helium ($Z=2$), this gives $E \approx -77.5$ eV, close to the experimental value.

### Problem 3: Hydrogen Molecular Ion

**Question:** The hydrogen molecular ion $\text{H}_2^+$ consists of two protons and one electron. Using a linear combination of atomic orbitals $\psi_{\text{trial}}(r) = c_1 \phi_A(r) + c_2 \phi_B(r)$, where $\phi_A$ and $\phi_B$ are hydrogen 1s orbitals centered on the two protons, find the optimal coefficients and estimate the ground state energy as a function of the internuclear distance $R$.

**Answer:** Due to symmetry, $c_1 = c_2 = 1/\sqrt{2}$ for the ground state (bonding orbital). The energy as a function of $R$ is:

$$E(R) = \frac{H_{AA} + H_{AB}}{1 + S_{AB}}$$

Where:
- $H_{AA} = \langle\phi_A|H|\phi_A\rangle = -1 \text{ Ry}$
- $H_{AB} = \langle\phi_A|H|\phi_B\rangle = -e^{-R/a_0}(1 + R/a_0) \text{ Ry}$
- $S_{AB} = \langle\phi_A|\phi_B\rangle = e^{-R/a_0}(1 + R/a_0 + R^2/3a_0^2)$

The energy has a minimum at $R \approx 2.5 a_0$, giving the equilibrium bond length. The binding energy is approximately $0.1$ Ry.

### Problem 4: Anharmonic Oscillator

**Question:** Consider a quantum harmonic oscillator with an anharmonic perturbation: $V(x) = \frac{1}{2}m\omega^2 x^2 + \lambda x^4$. Using the trial wavefunction $\psi_{\text{trial}}(x) = (\alpha/\pi)^{1/4} e^{-\alpha x^2/2}$, find the optimal value of $\alpha$ and the corresponding ground state energy.

**Answer:** The energy expectation value is:

$$E[\alpha] = \frac{\hbar^2\alpha}{4m} + \frac{m\omega^2}{4\alpha} + \frac{3\lambda}{4\alpha^2}$$

Minimizing with respect to $\alpha$:

$$\frac{dE}{d\alpha} = \frac{\hbar^2}{4m} - \frac{m\omega^2}{4\alpha^2} - \frac{6\lambda}{4\alpha^3} = 0$$

For small $\lambda$, the solution is approximately:

$$\alpha \approx \frac{m\omega}{\hbar}\left(1 - \frac{3\lambda\hbar}{m^2\omega^3}\right)$$

Substituting back, the ground state energy is:

$$E \approx \frac{\hbar\omega}{2} + \frac{3\lambda\hbar}{4m\omega}$$

This correctly shows that the anharmonic term increases the ground state energy.

### Problem 5: Linear Variational Method for Double Well Potential

**Question:** Consider a double well potential $V(x) = \lambda(x^2 - a^2)^2$. Using the linear variational method with the basis functions $\phi_1(x) = (\alpha/\pi)^{1/4} e^{-\alpha(x-a)^2/2}$ and $\phi_2(x) = (\alpha/\pi)^{1/4} e^{-\alpha(x+a)^2/2}$ (Gaussian functions centered at the two minima), estimate the ground state energy and wavefunction.

**Answer:** We need to calculate the Hamiltonian matrix elements:

$$H_{11} = H_{22} = \frac{\hbar^2\alpha}{4m} + \lambda\int_{-\infty}^{\infty} (x^2 - a^2)^2 (\alpha/\pi)^{1/2} e^{-\alpha(x-a)^2} dx$$

$$H_{12} = H_{21} = \frac{\hbar^2\alpha}{4m}e^{-\alpha a^2} + \lambda\int_{-\infty}^{\infty} (x^2 - a^2)^2 (\alpha/\pi)^{1/2} e^{-\alpha(x-a)^2/2} e^{-\alpha(x+a)^2/2} dx$$

And the overlap matrix:

$$S_{11} = S_{22} = 1, \quad S_{12} = S_{21} = e^{-\alpha a^2}$$

Solving the generalized eigenvalue problem, the ground state energy is:

$$E_0 = \frac{H_{11} - H_{12}}{1 - S_{12}}$$

For large $a$, this approaches the energy of a single well, while for small $a$, it shows tunneling effects.

### Problem 6: Variational Monte Carlo

**Question:** Explain how the variational Monte Carlo method can be used to calculate the ground state energy of a many-body quantum system, and outline the steps involved.

**Answer:** The variational Monte Carlo (VMC) method combines the variational principle with Monte Carlo integration to calculate the ground state energy of complex quantum systems. The steps are:

1. Choose a trial wavefunction $\psi_{\text{trial}}(\vec{r}; \vec{\alpha})$ with variational parameters $\vec{\alpha}$.

2. Express the energy expectation value as:

   $$E[\vec{\alpha}] = \frac{\int \psi_{\text{trial}}^*(\vec{r}; \vec{\alpha}) H \psi_{\text{trial}}(\vec{r}; \vec{\alpha}) d\vec{r}}{\int |\psi_{\text{trial}}(\vec{r}; \vec{\alpha})|^2 d\vec{r}}$$

3. Rewrite this as:

   $$E[\vec{\alpha}] = \int \frac{\psi_{\text{trial}}^*(\vec{r}; \vec{\alpha}) H \psi_{\text{trial}}(\vec{r}; \vec{\alpha})}{|\psi_{\text{trial}}(\vec{r}; \vec{\alpha})|^2} \cdot \frac{|\psi_{\text{trial}}(\vec{r}; \vec{\alpha})|^2}{\int |\psi_{\text{trial}}(\vec{r}; \vec{\alpha})|^2 d\vec{r}} d\vec{r}$$

   $$E[\vec{\alpha}] = \int E_L(\vec{r}; \vec{\alpha}) \rho(\vec{r}; \vec{\alpha}) d\vec{r}$$

   Where $E_L(\vec{r}; \vec{\alpha}) = \frac{\psi_{\text{trial}}^*(\vec{r}; \vec{\alpha}) H \psi_{\text{trial}}(\vec{r}; \vec{\alpha})}{|\psi_{\text{trial}}(\vec{r}; \vec{\alpha})|^2}$ is the local energy, and $\rho(\vec{r}; \vec{\alpha})$ is the normalized probability density.

4. Use Metropolis algorithm to generate samples $\{\vec{r}_i\}$ from the probability distribution $\rho(\vec{r}; \vec{\alpha})$.

5. Estimate the energy as:

   $$E[\vec{\alpha}] \approx \frac{1}{N} \sum_{i=1}^N E_L(\vec{r}_i; \vec{\alpha})$$

6. Optimize the variational parameters $\vec{\alpha}$ to minimize the energy.

This method is particularly useful for many-body systems where analytical integration is impossible.

### Problem 7: Excited States via Orthogonality Constraints

**Question:** Using the linear variational method, explain how to find an approximation to the first excited state of a quantum system, ensuring orthogonality to the ground state.

**Answer:** To find the first excited state:

1. First, find the approximate ground state $|\psi_0\rangle$ using the variational method.

2. Construct a trial wavefunction for the first excited state as:

   $$|\psi_{\text{trial}}^{(1)}\rangle = \sum_{i=1}^N c_i |\phi_i\rangle$$

3. Impose the orthogonality constraint:

   $$\langle\psi_0|\psi_{\text{trial}}^{(1)}\rangle = \sum_{i=1}^N c_i \langle\psi_0|\phi_i\rangle = 0$$

4. This constraint can be incorporated using a Lagrange multiplier, leading to a modified eigenvalue problem:

   $$\sum_{j=1}^N H_{ij} c_j - \lambda \sum_{j=1}^N S_{ij} c_j - \mu \langle\psi_0|\phi_i\rangle = 0$$

5. Alternatively, we can project out the ground state component from our basis:

   $$|\tilde{\phi}_i\rangle = |\phi_i\rangle - |\psi_0\rangle\langle\psi_0|\phi_i\rangle$$

   And then solve the standard eigenvalue problem in this modified basis.

6. The lowest eigenvalue of this modified problem gives an upper bound to the first excited state energy.

## Conclusion

The variational principle is a fundamental tool in quantum mechanics that provides a systematic way to approximate the ground state energy and wavefunction of complex systems. While it has limitations, particularly for excited states, its flexibility and lack of dependence on a small parameter make it complementary to perturbation theory. Modern computational approaches, such as variational Monte Carlo, have extended its applicability to many-body systems, making it an essential technique in quantum chemistry, condensed matter physics, and quantum field theory.
