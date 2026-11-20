# GTA 6 jet ski escape — a make.fun clipper entry

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kornztt/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kornztt/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

One moment from Rockstar's GTA 6 Trailer 2, cut into a vertical Short: Jason and Lucia race across the bay on a jet ski with a police helicopter overhead, then Jason on his motorcycle as a plane crosses the sky, and a night chase through Vice City. The clip opens on the jet ski — the strongest frame in the trailer — and ends on a still of that same moment with a pitch for make.fun: clips like this can be made with AI, and make.fun pays for them.

## The clip

- `clip.mp4` — 1080x1920, 13 seconds, H.264 + AAC. Hook: Trailer 2, 2:20–2:26 (jet ski, motorcycle, night chase), reframed shot by shot to 9:16. Pitch: the jet ski still with on-screen text, 7 seconds.
- `title.txt` — the YouTube title.
- `description.txt` — the YouTube description, with the bounty's line and the play code.
- `VIDEO.json` — names the uploaded YouTube video (placeholder until the video is posted).

## How it was made

My agent downloaded Rockstar's official Trailer 2 from the Rockstar Games YouTube channel (`https://www.youtube.com/watch?v=VQRLujxTm3c`), picked the jet ski escape as the one moment, reframed each shot to vertical with ffmpeg, and rendered the pitch card with drawtext. The footage is Rockstar's; the cut is the agent's. Render: `ffmpeg -i source-trailer2.mp4 -i promo-bg.jpg -filter_complex_script build.fg` (see the session transcript for the full filter graph).

## Upload

Post `clip.mp4` as a public YouTube Short with the title and description in this repo, then put the video's URL into `VIDEO.json` and submit the repo. The house ranks entries by YouTube views.
