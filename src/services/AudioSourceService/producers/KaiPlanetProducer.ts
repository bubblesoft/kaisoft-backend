import IProducer from "../IProducer";

import Artist from "../Artist";
import List from "../List";
import PlaybackSource from "../PlaybackSource";
import Producer from "../Producer";
import Source from "../Source";
import Track from "../Track";

export default class KaiPlanetProducer extends Producer implements IProducer {
    public static readonly sources = [Source.kaiPlanet];

    public async getPlaybackSources(id: string, source: Source, { playbackQuality = 0 } = {}) {
        try {
            return [new PlaybackSource([
                "https://audio-waves.oss-cn-shanghai.aliyuncs.com/demo.mp3",
                "https://kaiplanet.net/demo.mp3",
                "http://kaiplanet.net/demo.mp3",
            ], { quality: 0 })];
        } catch (e) {
            return [];
        }
    }

    public async getRecommends(source: Source, inputTrack: Track) {
        if (inputTrack) {
            return null;
        }

        return [new Track("0", "Demo", [new Artist("Unknown")], source, {
            picture: "https://audio-waves.oss-cn-shanghai.aliyuncs.com/sea.jpg",
        })];
    }

    public async getLists(source: Source) {
        return [new List("demo", "Demo", source)];
    }

    public async getList(id: string, source: Source, { playbackQuality = 0 } = {}) {
        return [new Track("0", "Demo", [new Artist("Unknown")], source, {
            picture: "https://audio-waves.oss-cn-shanghai.aliyuncs.com/sea.jpg",
        })];
    }

    public async getTrack(id: string, source: Source, { playbackQuality = 0 } = {}) {
        return new Track("0", "Demo", [new Artist("Unknown")], source, {
            picture: "https://audio-waves.oss-cn-shanghai.aliyuncs.com/sea.jpg",
        });
    }
}
