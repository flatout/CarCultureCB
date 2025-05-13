import { NextRequest, NextResponse } from 'next/server';
import { NeynarAPIClient } from '@neynar/nodejs-sdk';

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY || 'NEYNAR_FROG_FM';
const CONTRACT_ADDRESS = '0x44dF55B47F24B73190657fE9107Ca43234bbc21E';
const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3001';

const client = new NeynarAPIClient(NEYNAR_API_KEY);

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body = await req.json();
    
    // Validate the frame message using Neynar
    const { valid } = await client.validateFrameAction(body?.trustedData?.messageBytes || '');
    
    if (!valid) {
      return new NextResponse(
        JSON.stringify({
          frames: {
            version: 'vNext',
            image: `${BASE_URL}/error.png`,
            buttons: [
              {
                label: '💬',
                action: 'post'
              }
            ],
            post_url: `${BASE_URL}/api/frame`
          }
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Return the mint page redirect with social actions
    return new NextResponse(
      JSON.stringify({
        frames: {
          version: 'vNext',
          image: `${BASE_URL}/mint-preview.png`,
          buttons: [
            {
              label: '💬',
              action: 'post'
            },
            {
              label: '🔄',
              action: 'post'
            },
            {
              label: '❤️',
              action: 'post'
            },
            {
              label: '🔲',
              action: 'post'
            },
            {
              label: '↗️',
              action: 'link',
              target: `${BASE_URL}/?contract=${CONTRACT_ADDRESS}`
            }
          ],
          post_url: `${BASE_URL}/api/frame`,
          og_title: "Car of the Day - Rules of the Road 1",
          og_description: "Mint your exclusive Car of the Day NFT on Base",
          og_image: `${BASE_URL}/mint-preview.png`
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error handling frame action:', error);
    return new NextResponse(
      JSON.stringify({
        frames: {
          version: 'vNext',
          image: `${BASE_URL}/error.png`,
          buttons: [
            {
              label: '🔄 Retry',
              action: 'post'
            }
          ],
          post_url: `${BASE_URL}/api/frame`
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export const dynamic = 'force-dynamic'; 