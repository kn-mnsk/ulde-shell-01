#

## EG01: Surface Curves on Rotating Sphere( or Earth)

1. The earth is rotating around its Y axis in LOCAL Space, and the Y axis is tilted around the Z axis of WORLD Space, by 23.5 degree.  
2. Two surface curves(red and yellow, respectively) are rendered by the curve id as orbit of moving green small sphere, while the red small sphere is located at the starting point.  
3. The red curve is rendered in WORLD Space, while the yellow curve is rendered in LOCAL Space.  
4. The surface curve equation of the sphere can be:  
  $x = r\times\sin(\theta)\times\cos(\phi)$,  
  $y = r\times\cos(\theta)$,  
  $z = r\times\sin(\theta)\times\sin(\phi)$.  
5. Each curve ID as follows:  
0:  $\theta_{current}=\theta_{previous}+\Delta\omega\times\Delta t$,  $\phi_{current}=\phi_{previuos}+2.0\times\pi/10$  
1:  $\theta= \theta+\Delta\omega\times\Delta t$, $\phi=\phi+\Delta\omega\times\Delta\omega\times\Delta t$  
2:  $\theta= \theta+\Delta\omega\times\Delta t$, $\phi=\phi+\(1/2\)\times\Delta\omega\times\Delta t$  
3:  $\theta= \theta+\Delta\omega\times\Delta t$, $\phi=\phi+\(1/11\)\times\Delta\omega\times\Delta t$  
4:  Loxodrome: $\rightarrow$ $\theta= \theta+\Delta\omega\times\Delta t$, $\phi= \ln(\cot(\theta)-\cosec(\theta))$  
5:  Loxodrome:  
Draw surface curve bewtween given two locations on the sphere $\rightarrow$ see the scripts

## Katex + Marked

### KaTEX  

+ You can find information on Install, Documentation and View on GitHub of **KaTEX** $\rightarrow$ [The Fastest math typesetting library for the web](https://katex.org/)  
+ You can also find more information about **LaTeX** mathematical expressions $\rightarrow$ [Math Expression](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)  

### marked  

+ You can find the [Marked Documentation](https://marked.js.org/using_advanced)
