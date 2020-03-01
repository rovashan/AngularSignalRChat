using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SignalRChatServer
{
    public class Chat : Hub
    {
        public async Task SendToAll(string nick, string avatar, string message)
        {
            await Clients.All.SendAsync("sendToAll", nick, avatar, message);
        }
    }
}
