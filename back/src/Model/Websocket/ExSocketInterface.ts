import {PointInterface} from "./PointInterface";
import {Identificable} from "./Identificable";
import {ViewportInterface} from "_Model/Websocket/ViewportMessage";
import {BatchMessage, SubMessage} from "../../Messages/generated/messages_pb";
import {WebSocket} from "uWebSockets.js"

export interface ExSocketInterface extends WebSocket, Identificable {
    token: string;
    roomId: string;
    //userId: number;   // A temporary (autoincremented) identifier for this user
    userUuid: string; // A unique identifier for this user
    name: string;
    characterLayers: string[];
    position: PointInterface;
    viewport: ViewportInterface;
    /**
     * Pushes an event that will be sent in the next batch of events
     */
    emitInBatch: (payload: SubMessage) => void;
    batchedMessages: BatchMessage;
    batchTimeout: NodeJS.Timeout|null;
    pingTimeout: NodeJS.Timeout|null;
    disconnecting: boolean,
    tags: string[]
}
