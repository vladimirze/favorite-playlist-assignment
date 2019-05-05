import CONFIG from '../config';
import request from '../services/request';


const trackResource = {
   getTrackByName(name) {
      return request(`${CONFIG.BASE_ENDPOINT}/track.search?q_track=${name}`)
      // return Promise.resolve({
      //     "message": {
      //         "header": {
      //             "status_code": 200,
      //             "execute_time": 0.017067909240723,
      //             "available": 1318
      //         },
      //         "body": {
      //             "track_list": [
      //                 {
      //                     "track": {
      //                         "track_id": 49639667,
      //                         "track_name": "Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 1,
      //                         "commontrack_id": 22832280,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 1,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 16701457,
      //                         "album_name": "La Cuesta de Mr. Bond",
      //                         "artist_id": 10635,
      //                         "artist_name": "Melon Diesel",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Melon-Diesel/Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Melon-Diesel/Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2015-12-17T22:07:50Z",
      //                         "primary_genres": {
      //                             "music_genre_list": [
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 14,
      //                                         "music_genre_parent_id": 34,
      //                                         "music_genre_name": "Pop",
      //                                         "music_genre_name_extended": "Pop",
      //                                         "music_genre_vanity": "Pop"
      //                                     }
      //                                 },
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 18,
      //                                         "music_genre_parent_id": 34,
      //                                         "music_genre_name": "Hip Hop/Rap",
      //                                         "music_genre_name_extended": "Hip Hop/Rap",
      //                                         "music_genre_vanity": "Hip-Hop-Rap"
      //                                     }
      //                                 }
      //                             ]
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 17318052,
      //                         "track_name": "Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 4,
      //                         "commontrack_id": 10894186,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 0,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 14209815,
      //                         "album_name": "Cudderisback",
      //                         "artist_id": 387153,
      //                         "artist_name": "Kid Cudi",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Kid-Cudi/Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Kid-Cudi/Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2012-05-19T17:23:41Z",
      //                         "primary_genres": {
      //                             "music_genre_list": []
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 62074843,
      //                         "track_name": "Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 7,
      //                         "commontrack_id": 14339609,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 0,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 18088169,
      //                         "album_name": "Slave Nation",
      //                         "artist_id": 76020,
      //                         "artist_name": "Vomito Negro",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Vomito-Negro/Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Vomito-Negro/Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2015-09-29T02:06:42Z",
      //                         "primary_genres": {
      //                             "music_genre_list": [
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 1153,
      //                                         "music_genre_parent_id": 21,
      //                                         "music_genre_name": "Heavy Metal",
      //                                         "music_genre_name_extended": "Rock / Heavy Metal",
      //                                         "music_genre_vanity": "Rock-Heavy-Metal"
      //                                     }
      //                                 }
      //                             ]
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 10190133,
      //                         "track_name": "Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 1,
      //                         "commontrack_id": 6745186,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 0,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 11082132,
      //                         "album_name": "BALADAS 2010",
      //                         "artist_id": 550822,
      //                         "artist_name": "Project Cover Gang",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Project-Cover-Gang/Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Project-Cover-Gang/Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2011-06-12T18:43:53Z",
      //                         "primary_genres": {
      //                             "music_genre_list": []
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 17931575,
      //                         "track_name": "He Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 35,
      //                         "commontrack_id": 10650091,
      //                         "instrumental": 0,
      //                         "explicit": 1,
      //                         "has_lyrics": 1,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 2,
      //                         "album_id": 14182391,
      //                         "album_name": "The 6th",
      //                         "artist_id": 13897638,
      //                         "artist_name": "Flame feat. Alban Darche Trio",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Flame-feat-Alban-Darche-Trio/He-Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Flame-feat-Alban-Darche-Trio/He-Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2012-07-07T16:25:04Z",
      //                         "primary_genres": {
      //                             "music_genre_list": []
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 62001082,
      //                         "track_name": "Oops!...i Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 2,
      //                         "commontrack_id": 14203012,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 1,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 18078729,
      //                         "album_name": "A Tribute to Britney Spears",
      //                         "artist_id": 13890271,
      //                         "artist_name": "It's a Cover Up",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/It-s-a-Cover-Up/Oops-I-Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/It-s-a-Cover-Up/Oops-I-Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2017-02-14T23:21:09Z",
      //                         "primary_genres": {
      //                             "music_genre_list": [
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 14,
      //                                         "music_genre_parent_id": 34,
      //                                         "music_genre_name": "Pop",
      //                                         "music_genre_name_extended": "Pop",
      //                                         "music_genre_vanity": "Pop"
      //                                     }
      //                                 }
      //                             ]
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 8143128,
      //                         "track_name": "Oops!... I Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 37,
      //                         "commontrack_id": 7475286,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 1,
      //                         "has_subtitles": 1,
      //                         "has_richsync": 0,
      //                         "num_favourite": 1,
      //                         "album_id": 10925218,
      //                         "album_name": "Kidz Bop",
      //                         "artist_id": 123944,
      //                         "artist_name": "Kidz Bop",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Kidz-Bop/Oops-I-Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Kidz-Bop/Oops-I-Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2011-12-16T12:38:53Z",
      //                         "primary_genres": {
      //                             "music_genre_list": []
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 34929007,
      //                         "track_name": "We Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 32,
      //                         "commontrack_id": 14310973,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 0,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 15569604,
      //                         "album_name": "Can't Ban the Snowman (Clean)",
      //                         "artist_id": 154916,
      //                         "artist_name": "Young Jeezy",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Young-Jeezy/We-Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Young-Jeezy/We-Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2013-11-23T19:30:53Z",
      //                         "primary_genres": {
      //                             "music_genre_list": []
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 53078975,
      //                         "track_name": "You Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 13,
      //                         "commontrack_id": 1824777,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 0,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 17065070,
      //                         "album_name": "Love Colured Soul",
      //                         "artist_id": 17439,
      //                         "artist_name": "Ken Navarro",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/Ken-Navarro/You-Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/Ken-Navarro/You-Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2011-06-10T19:11:38Z",
      //                         "primary_genres": {
      //                             "music_genre_list": [
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 14,
      //                                         "music_genre_parent_id": 34,
      //                                         "music_genre_name": "Pop",
      //                                         "music_genre_name_extended": "Pop",
      //                                         "music_genre_vanity": "Pop"
      //                                     }
      //                                 },
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 11,
      //                                         "music_genre_parent_id": 34,
      //                                         "music_genre_name": "Jazz",
      //                                         "music_genre_name_extended": "Jazz",
      //                                         "music_genre_vanity": "Jazz"
      //                                     }
      //                                 },
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 25,
      //                                         "music_genre_parent_id": 34,
      //                                         "music_genre_name": "Easy Listening",
      //                                         "music_genre_name_extended": "Easy Listening",
      //                                         "music_genre_vanity": "Easy-Listening"
      //                                     }
      //                                 }
      //                             ]
      //                         }
      //                     }
      //                 },
      //                 {
      //                     "track": {
      //                         "track_id": 50642652,
      //                         "track_name": "We Did It Again",
      //                         "track_name_translation_list": [],
      //                         "track_rating": 32,
      //                         "commontrack_id": 8478748,
      //                         "instrumental": 0,
      //                         "explicit": 0,
      //                         "has_lyrics": 0,
      //                         "has_subtitles": 0,
      //                         "has_richsync": 0,
      //                         "num_favourite": 0,
      //                         "album_id": 16809817,
      //                         "album_name": "Can't Ban the Snowman",
      //                         "artist_id": 34092546,
      //                         "artist_name": "DJ Drama feat. Young Jeezy",
      //                         "track_share_url": "https://www.musixmatch.com/lyrics/DJ-Drama-Young-Jeezy/We-Did-It-Again?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "track_edit_url": "https://www.musixmatch.com/lyrics/DJ-Drama-Young-Jeezy/We-Did-It-Again/edit?utm_source=application&utm_campaign=api&utm_medium=Harel%3A1409618237605",
      //                         "restricted": 0,
      //                         "updated_time": "2017-12-23T07:27:41Z",
      //                         "primary_genres": {
      //                             "music_genre_list": [
      //                                 {
      //                                     "music_genre": {
      //                                         "music_genre_id": 18,
      //                                         "music_genre_parent_id": 34,
      //                                         "music_genre_name": "Hip Hop/Rap",
      //                                         "music_genre_name_extended": "Hip Hop/Rap",
      //                                         "music_genre_vanity": "Hip-Hop-Rap"
      //                                     }
      //                                 }
      //                             ]
      //                         }
      //                     }
      //                 }
      //             ]
      //         }
      //     }
      // })
      // .then((response) => {
      //    return response.message.body.track_list;
      // });
   }
};

export default trackResource;
