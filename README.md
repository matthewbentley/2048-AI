# 2048 AI

AI for the game [2048](https://github.com/gabrielecirulli/2048).

<<<<<<< HEAD
See it in action [here](http://ov3y.github.io/2048-AI/). (Hit the auto-run button to let the AI attempt to solve it by itself)

The algorithm is iterative deepening depth first alpha-beta search. The evaluation function tries to keep the rows and columns monotonic (either all decreasing or increasing) while aligning same-valued tiles and minimizing the number of tiles on the grid. For more detail on how it works, [check out my answer on stackoverflow](http://stackoverflow.com/a/22389702/1056032).

You can tweak the thinking time via global var `animationDelay`. Higher = more time/deeper search.
=======
### Contributions

 - [TimPetricola](https://github.com/TimPetricola) added best score storage
 - [chrisprice](https://github.com/chrisprice) added custom code for swipe handling on mobile
 - [elektryk](https://github.com/elektryk) made swipes work on Windows Phone
 - [mgarciaisaia](https://github.com/mgarciaisaia) addes support for Android 2.3

Many thanks to [rayhaanj](https://github.com/rayhaanj), [Mechazawa](https://github.com/Mechazawa), [grant](https://github.com/grant), [remram44](https://github.com/remram44) and [ghoullier](https://github.com/ghoullier) for the many other good contributions.

### Screenshot

<p align="center">
  <img src="http://pictures.gabrielecirulli.com/2048-20140309-234100.png" alt="Screenshot"/>
</p>

That screenshot is fake, by the way. I never reached 2048 :smile:

## Contributing
Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into `master`! If you can, please make sure the game fully works before sending the PR, as that will help speed up the process.
>>>>>>> 542208d94ac562ff573d697039a493cafcc7f014

~~I think there are still some bugs as it tends to make some weird moves and die during the endgame, but in my testing it almost always gets 1024 and usually gets very close to 2048, achieving scores of roughly 8-10k.~~

The better heuristics now give it a success rate of about 90% in my testing (on a reasonably fast computer).

<<<<<<< HEAD
### Suggested Improvements

1.  Caching. It's not really taking advantage of the iterative deepening yet, as it doesn't remember the move orderings from previous iterations. Consequently, there aren't very many alpha-beta cutoffs. With caching, I think the tree could get pruned much more. This would also allow a higher branching factor for computer moves, which would help a lot because I think the few losses are due to unexpected random computer moves that had been pruned.

2. Put the search in a webworker. Parallelizing minimax is really hard, but just running it like normal in another thread would let the animations run more smoothly.

3. ~~Evaluation tweaks. There are currently four heuristics. Change the weights between them, run a lot of test games and track statistics to find an optimal eval function.~~

4. Comments and cleanup. It's pretty hacky right now but I've spent too much time already. There are probably lots of low-hanging fruit optimizations.
=======
## Donations
I made this in my spare time, and it's hosted on GitHub (which means I don't have any hosting costs), but if you enjoyed the game and feel like buying me coffee, you can donate at my BTC address: `1Ec6onfsQmoP9kkL3zkpB6c5sA4PVcXU2i`. Thank you very much!
>>>>>>> 542208d94ac562ff573d697039a493cafcc7f014
