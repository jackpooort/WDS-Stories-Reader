export const EPISODE_MASTER_URL = 'https://raw.githubusercontent.com/wds-sirius/Adv-Resource/main/manifest/Episode.json'
export const COMIC_MASTER_URL = 'https://raw.githubusercontent.com/wds-sirius/Adv-Resource/main/manifest/Comic.json'

export const EPISODE_DATA_URL = 'https://raw.githubusercontent.com/wds-sirius/Adv-Resource/main'

#Русский_перевод
const TRANSLATION_BASE = '/translations/ru';

export function getEpisodeDataUrl(episodeId: number) {
    const ruUrl = `${TRANSLATION_BASE}/episode/${episodeId}.json`;
    if (episodeId === 1000000 || episodeId === 1000001) {
        return ruUrl;
    }
    
    return `${EPISODE_DATA_URL}/episode/${episodeId}.json`;
}

export function getEpisodeVoiceDataUrl(episodeId : number){
    return `${EPISODE_DATA_URL}/voice/${episodeId}/manifest.json`
}

export function getComicDataUrl(filename : string) {
    return `${EPISODE_DATA_URL}/comic/${filename}.png`
}

export function getposterIconUrl(posterId : number) {
    return `${EPISODE_DATA_URL}/image/posterIcon//${posterId}.png`
}

export function geteventLogoUrl(eventId : number) {
    return `${EPISODE_DATA_URL}/image/eventLogo/logo_${eventId}.png`
}

export function getCardIconUrl(cardId : number){
    return `${EPISODE_DATA_URL}/image/cardIcon/${cardId}_0.png`
}

export function getVoiceUrl(story_id : number, VoiceFileName:string){
    return `${EPISODE_DATA_URL}/voice/${story_id}/${VoiceFileName}.mp3`
}
